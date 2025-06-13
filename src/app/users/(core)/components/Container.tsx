"use client";

import { useEffect } from "react";
import { userGetAll } from "../store/user.actions";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import { setUserState } from "../store/user.slice";
import { PAGE_SIZE } from "@/app/(applications)/(http)/http.constant";
import { useToast } from "@/app/(applications)/components/toast/toast";

const UsersContianer = () => {
  const { addToast } = useToast();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userGetAll());
    addToast({ message: "hi from toast" });
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

  return <main>Home Page</main>;
};

export default UsersContianer;
