import "./Layout.scss";

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
