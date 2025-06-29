import { AppDispatch, RootState } from "@/app/(applications)/store/app.store";
import { setUserState } from "./user.slice";
import { userRepository } from "../repository/users.repository";
import { GetUsersProps } from "../model/users.repo.model";
import { ApiStatus } from "@/app/(applications)/(http)/http.constant";
import { ApiError, ApiResponse } from "@/app/(applications)/(http)/http.model";
import { User, UserSecure } from "../model/users.model";
import { AxiosError } from "axios";

const handleSuccess =
  (payload: ApiResponse<UserSecure>) =>
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
      const e = error as AxiosError<ApiError>;
      dispatch(setUserState({ error: e.response?.data.error || e.message }));
    } finally {
      setTimeout(() => {
        dispatch(setUserState({ loading: false }));
      }, 300);
    }
  };
};
