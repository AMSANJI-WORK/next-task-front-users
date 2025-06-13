"use client";
import React, { FC, Fragment, PropsWithChildren, useEffect } from "react";
import { useToast } from "./toast/toast";

const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  const { resetToast } = useToast();
  useEffect(() => {
    return () => {
      resetToast();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AppContainer;
