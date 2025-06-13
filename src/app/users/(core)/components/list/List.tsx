import { useAppSelector } from "@/app/(applications)/hooks/store.hooks";
import "./list.scss";
import React from "react";
import ListItem from "../list-item/ListItem";

const UserList = () => {
  const list = useAppSelector((state) => state.user.data.list);
  return (
    <ul className="list">
      {list.map((item) => (
        <ListItem item={item} key={item.login.uuid} />
      ))}
    </ul>
  );
};

export default UserList;
