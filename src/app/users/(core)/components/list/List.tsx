import {
  useAppDispatch,
  useAppSelector,
} from "@/app/(applications)/hooks/store.hooks";
import "./list.scss";
import React, { useMemo, useState } from "react";
import AppButton from "@/app/(applications)/components/button/Button";
import classNames from "classnames";
import ListItem from "../list-item/ListItem";

const tabs = [
  {
    key: "all",
    title: "All",
  },
  {
    key: "favorite",
    title: "Favorite",
  },
];

const UserList = () => {
  const { list, favorite, loading, paginate } = useAppSelector(
    (state) => state.user.data
  );
  const [activeTab, setActiveTab] = useState("all");
  const datasource = useMemo(
    () => (activeTab === "all" ? list : favorite),
    [activeTab, list, favorite]
  );
  const handleLoadMoreOnScroll = (
    e: React.UIEvent<HTMLUListElement, UIEvent>
  ) => {
    if (activeTab === "all") {
      console.log("scroll");
    }
  };
  return (
    <div className="list__container">
      <nav className="list__tab">
        {tabs.map((item) => (
          <AppButton
            key={item.key}
            size="sm"
            className={classNames("list__tab__button", {
              "list__tab__button--active": activeTab === item.key,
            })}
            onClick={() => setActiveTab(item.key)}
          >
            {item.title}
          </AppButton>
        ))}
      </nav>
      <ul className="list" onScroll={handleLoadMoreOnScroll}>
        {loading && <div className="list__loading">loading</div>}
        {datasource.length === 0 && !loading && (
          <div className="list__no-data">No Data Exist</div>
        )}
        {datasource.map((item) => (
          <ListItem item={item} key={item.login.uuid} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
