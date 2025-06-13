import { AppDispatch, RootState } from "@/app/(applications)/store/app.store";
import { setUserState } from "./user.slice";
import { userRepository } from "../repository/users.repository";
import { GetUsersProps } from "../model/users.repo.model";
import { ApiStatus } from "@/app/(applications)/(http)/http.constant";
import { ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User } from "../model/users.model";
import { userData } from "../mock/user.mock";

const handleSuccess =
  (payload: ApiResponse<User>) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const currentList = getState().user.data.list;
    const {
      info: { page, results },
      results: data,
    } = payload;
    dispatch(
      setUserState({
        list: page === 1 ? data : [...currentList, ...data],
        paginate: {
          page,
          results,
        },
      })
    );
  };

export const userGetAll = (payload?: Partial<GetUsersProps>) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const loading = getState().user.data.loading;
    try {
      if (loading) return;
      dispatch(setUserState({ loading: true }));
      const response = await userRepository.getAll(payload);
      if (response.status === ApiStatus.SUCCESS)
        dispatch(handleSuccess(response.data));
    } catch (error) {
      // fill list with mock data because of internet issue
      dispatch(handleSuccess(userData));
    } finally {
      dispatch(setUserState({ loading: false }));
    }
  };
};
