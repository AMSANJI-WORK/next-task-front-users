import { GetUsersProps } from "../model/users.repo.model";
import client, { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User, UserProfile, UserSecure } from "../model/users.model";

class UserRepository {
  private resource = "/api/users";
  getAll = (
    params: Partial<GetUsersProps> = {
      results: PAGE_SIZE,
      exc: "registered,dob",
    }
  ) => client.get<ApiResponse<UserSecure>>(this.resource, { params });
  random = (params = { results: 1, exc: "login,info" }) =>
    client.get<UserProfile>(this.resource, {
      params,
    });
}

export const userRepository = new UserRepository();
