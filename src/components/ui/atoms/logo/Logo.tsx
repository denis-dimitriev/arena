import "./Logo.scss";

import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo">
      <NavLink className="logo__link" to="/">
        arena
      </NavLink>
    </div>
  );
};
