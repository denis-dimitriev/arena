import "./Layout.scss";

import { Outlet } from "react-router-dom";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__container">{children}</div>
      </main>
    </div>
  );
};
