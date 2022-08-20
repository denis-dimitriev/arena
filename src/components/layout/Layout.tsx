import React, { ReactNode } from "react";

import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <main className="main">{children}</main>
    </div>
  );
};
