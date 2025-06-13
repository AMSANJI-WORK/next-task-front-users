import { GetUsersProps } from "../model/users.repo.model";
import client, { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User, UserProfile } from "../model/users.model";

class UserRepository {
  private resource = "/api/";
  getAll = (
    params: Partial<GetUsersProps> = {
      results: PAGE_SIZE,
      exc: "login,registered",
    }
  ) => client.get<ApiResponse<User>>(this.resource, { params });
  random = (params = { results: 1, exc: "login,info" }) =>
    client.get<UserProfile>(this.resource, {
      params,
    });
}

export const userRepository = new UserRepository();
