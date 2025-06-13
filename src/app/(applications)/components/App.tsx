import React, { FC, PropsWithChildren } from "react";
import AppHeader from "./header/Header";

const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <AppHeader />
      {children}
    </main>
  );
};

export default AppContainer;
