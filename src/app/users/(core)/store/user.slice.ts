import { createSlice } from "@reduxjs/toolkit";
import { UserSecure } from "../model/users.model";
import { ApiPaginate } from "@/app/(applications)/(http)/http.model";
import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";

const initialState = {
  data: {
    loading: false,
    list: [] as UserSecure[],
    favorite: [] as UserSecure[],
    paginate: {
      page: 1,
      results: PAGE_SIZE,
    } as Pick<ApiPaginate, "page" | "results">,
    selected: {} as UserSecure | {},
    error: "",
  },
};

type State = typeof initialState;

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setState: (state, { payload }: { payload: Partial<State["data"]> }) => {
      state.data = { ...state.data, ...payload };
      if (state.data.favorite.length === 0 && localStorage.favorite)
        state.data.favorite = JSON.parse(localStorage.favorite);
    },
  },
});

export const { setState: setUserState } = UserSlice.actions;

export default UserSlice;
