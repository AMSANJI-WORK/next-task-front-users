import { ApiStatus } from "@/app/(applications)/(http)/http.constant";
import { ApiError, ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User } from "@/app/users/(core)/model/users.model";
import { NextRequest, NextResponse } from "next/server";

const removeBaseUrlFromImages = (src: string) =>
  src.replace(process.env.NEXT_PUBLIC_API_URL || "", "");

export async function GET(req: NextRequest) {
  const search = req.nextUrl.search;
  const url = new URL(`/api/${search}`, process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch(url.toString());
  switch (response.status) {
    case ApiStatus.SUCCESS: {
      const res = (await response.json()) as ApiResponse<User>;
      return NextResponse.json({
        ...res,
        results: res.results.map(
          ({ login: { username, uuid }, picture, ...item }) => ({
            ...item,
            login: {
              username,
              uuid,
            },
            picture: Object.fromEntries(
              Object.entries(picture).map(([key, value]) => [
                key,
                removeBaseUrlFromImages(value),
              ])
            ),
          })
        ),
      });
    }

    default:
      const res = (await response.json()) as ApiError;
      return NextResponse.json(
        { error: res.error || response.statusText },
        { status: response.status }
      );
  }
}
