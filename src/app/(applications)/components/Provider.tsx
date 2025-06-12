"use client";
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../store/app.store";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
