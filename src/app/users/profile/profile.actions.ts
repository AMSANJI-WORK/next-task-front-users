import { ApiStatus } from "@/app/(applications)/(http)/http.constant";
import { userRepository } from "../(core)/repository/users.repository";

export const getRandomProfile = async () => {
  const response = await userRepository.random();
  if (response.status === ApiStatus.SUCCESS)
    return { data: response.data.results[0], ok: true };
  return { message: response.statusText, ok: false };
};
