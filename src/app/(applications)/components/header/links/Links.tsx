import React from "react";
import "./Links.scss";
import HeaderLinkItem from "../link-item/LinkItem";

const HeaderLinks = () => {
  return (
    <nav className="nav--container">
      <HeaderLinkItem href={"/users/profile"}>Profile</HeaderLinkItem>
      <HeaderLinkItem href={"/users"}>Users</HeaderLinkItem>
    </nav>
  );
};

export default HeaderLinks;
