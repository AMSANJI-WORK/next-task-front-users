import React from "react";
import "./header.scss";
import HeaderLinks from "./links/Links";
const AppHeader = () => {
  return (
    <header className="header">
      <div className="container header--warapper">
        <h3>User Demo</h3>
        <HeaderLinks />
      </div>
    </header>
  );
};

export default AppHeader;
