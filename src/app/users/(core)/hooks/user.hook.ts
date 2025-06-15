import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/(applications)/hooks/store.hooks";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { userGetAll } from "../store/user.actions";
import { setUserState } from "../store/user.slice";
import { UserSecure } from "../model/users.model";
export const useUser = () => {
  const dispatch = useAppDispatch();
  const {
    paginate: { page: currentPage },
    favorite,
  } = useAppSelector((state) => state.user.data);
  const searchParams = useSearchParams();

  const isInFavoriteItems = useCallback(
    (item: UserSecure) =>
      favorite.find((user) => user.login.uuid === item.login.uuid),
    [favorite.length]
  );

  const filterQurey = useCallback(() => {
    const qurey = new Map();
    if (searchParams.has("gender"))
      qurey.set("gender", searchParams.get("gender")!);
    if (searchParams.has("nat")) qurey.set("nat", searchParams.get("nat")!);
    qurey.set("page", currentPage + 1);
    qurey.set("results", PAGE_SIZE);
    return qurey;
  }, [currentPage, searchParams]);

  const handleFetchUser = () => {
    dispatch(userGetAll(Object.fromEntries(filterQurey())));
  };
  const handleModifyFavorite = useCallback(
    (item: UserSecure) => {
      const newFavorites = favorite.filter(
        (user) => user.login.uuid !== item.login.uuid
      );
      localStorage.favorite = JSON.stringify(newFavorites);
      dispatch(
        setUserState({
          favorite: isInFavoriteItems(item)
            ? newFavorites
            : [item, ...favorite],
        })
      );
    },
    [favorite, isInFavoriteItems]
  );
  const handleReset = () =>
    dispatch(
      setUserState({
        list: [],
        loading: false,
        paginate: { page: 1, results: PAGE_SIZE },
      })
    );
  return {
    handleFetchUser,
    filterQurey,
    handleReset,
    handleModifyFavorite,
    isInFavoriteItems,
  };
};
