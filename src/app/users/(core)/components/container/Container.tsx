import "./container.scss";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import UserList from "../list/List";
import UserFilters from "../filter/Filters";
import { useUser } from "../../hooks/user.hook";
import { useSearchParams } from "next/navigation";

const UsersContianer = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { handleFetchUser, handleReset } = useUser(true);

  useEffect(() => {
    handleFetchUser();
    return () => {
      handleReset();
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
