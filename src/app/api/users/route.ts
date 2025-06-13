import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User } from "@/app/users/(core)/model/users.model";
import { NextRequest, NextResponse } from "next/server";

const removeBaseUrlFromImages = (src: string) =>
  src.replace(process.env.NEXT_PUBLIC_API_URL || "", "");

export async function GET(req: NextRequest) {
  const search = req.nextUrl.search;
  const url = new URL(`/api/${search}`, process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch(url.toString());
  if (response.status) {
    const res = (await response.json()) as ApiResponse<User>;
    return NextResponse.json({
      ...res,
      results: res.results.map((item) => ({
        ...item,
        login: {
          uuid: item.login.uuid,
          username: item.login.username,
        },
        picture: Object.fromEntries(
          Object.entries(item.picture).map(([key, value]) => [
            key,
            removeBaseUrlFromImages(value),
          ])
        ),
      })),
    });
  }
}
