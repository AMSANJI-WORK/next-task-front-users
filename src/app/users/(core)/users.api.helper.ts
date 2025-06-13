import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User } from "@/app/users/(core)/model/users.model";

const removeBaseUrlFromImages = (src: string) =>
  src.replace(process.env.NEXT_PUBLIC_API_URL || "", "");

export const filterResultUserResponse = (res: ApiResponse<User>) => {
  const {
    info: { page, results },
    results: data,
  } = res;
  return {
    info: {
      page,
      results,
    },
    results: data.map((item) => ({
      ...item,
      picture: Object.fromEntries(
        Object.entries(item.picture).map(([key, value]) => [
          key,
          removeBaseUrlFromImages(value),
        ])
      ),
    })),
  };
};
