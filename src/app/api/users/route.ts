import { NextRequest, NextResponse } from "next/server";
import { userApiRepository } from "../../users/(core)/users.api.repository";
import {
  ApiMESSAGE,
  ApiStatus,
} from "@/app/(applications)/(http)/http.constant";
import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User } from "@/app/users/(core)/model/users.model";
import { ApiError } from "next/dist/server/api-utils";

const ALLOWED_ORIGINS = [process.env.NEXT_PUBLIC_APP_URL];

export async function GET(req: NextRequest) {
  if (!ALLOWED_ORIGINS.includes(req.nextUrl.origin)) {
    return new NextResponse(ApiMESSAGE.ERROR_CORES, {
      status: ApiStatus.ACCESS_DENIED,
    });
  }
  const search = req.nextUrl.search;
  const response = await userApiRepository.getAll(search);

  switch (response.status) {
    case ApiStatus.SUCCESS: {
      const res = (await response.json()) as ApiResponse<User>;
      return NextResponse.json(res);
    }

    default: {
      const res = (await response.json()) as ApiError;
      return NextResponse.json(res, {
        status: response.status,
        statusText: response.statusText,
      });
    }
  }
}
