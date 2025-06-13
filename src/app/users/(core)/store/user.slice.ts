import { createSlice } from "@reduxjs/toolkit";
import { User } from "../model/users.model";
import { ApiPaginate } from "@/app/(applications)/(http)/http.model";
import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";

const initialState = {
  data: {
    loading: false,
    list: [] as User[],
    paginate: {
      page: 1,
      results: PAGE_SIZE,
    } as Pick<ApiPaginate, "page" | "results">,
  },
};

type State = typeof initialState;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state, { payload }: { payload: Partial<State["data"]> }) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

export const { setState: setUserState } = UserSlice.actions;

export default UserSlice;
