import "./Logo.scss";

import { Link, NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <NavLink className="logo" to="/">
      SmarTTech
    </NavLink>
  );
};
