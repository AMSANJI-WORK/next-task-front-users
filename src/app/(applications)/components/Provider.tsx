"use client";
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../store/app.store";
import { ToastProvider } from "./toast/Toast";
import AppContainer from "./App";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <AppContainer>{children}</AppContainer>
      </ToastProvider>
    </Provider>
  );
};

export default AppProvider;
