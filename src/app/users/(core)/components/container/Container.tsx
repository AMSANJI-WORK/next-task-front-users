"use client";

import { useEffect } from "react";
import { userGetAll } from "../../store/user.actions";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import { setUserState } from "../../store/user.slice";
import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import UserList from "../list/List";
import UserFilters from "../filters/Filters";
import "./container.scss";
const UsersContianer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userGetAll());
    return () => {
      dispatch(
        setUserState({
          list: [],
          loading: false,
          paginate: { page: 1, results: PAGE_SIZE },
        })
      );
    };
  }, [dispatch]);

  return (
    <div className="container list__wrapper">
      <UserFilters />
      <UserList />
    </div>
  );
};

export default UsersContianer;
