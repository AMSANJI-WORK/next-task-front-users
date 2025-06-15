"use client";

import { useEffect } from "react";
import { userGetAll } from "../../store/user.actions";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import { setUserState } from "../../store/user.slice";
import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import UserList from "../list/List";
import UserFilters from "../filters/Filters";
import "./container.scss";
import { useRouter, useSearchParams } from "next/navigation";

const UsersContianer = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleFetchUser = () => {
    const query = new Map();
    query.set("page", 1);
    query.set("results", PAGE_SIZE);
    if (searchParams.has("gender"))
      query.set("gender", searchParams.get("gender"));
    if (searchParams.has("nat")) query.set("nat", searchParams.get("nat"));
    console.log(Object.fromEntries(query));
    dispatch(userGetAll(Object.fromEntries(query)));
  };
  useEffect(() => {
    handleFetchUser();
    return () => {
      dispatch(
        setUserState({
          list: [],
          loading: false,
          paginate: { page: 1, results: PAGE_SIZE },
        })
      );
    };
  }, [dispatch, searchParams]);

  return (
    <div className="container list__wrapper">
      <UserFilters />
      <UserList />
    </div>
  );
};

export default UsersContianer;
