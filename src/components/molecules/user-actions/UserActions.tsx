import "./UserActions.scss";

import { FavoriteIcon, ShoppingCartIcon, WatchedIcon } from "../../../assets";
import { NavLink } from "react-router-dom";

export const UserActions = () => {
  return (
    <div className="user-actions">
      <NavLink className="user-actions__link" to="#">
        <WatchedIcon />
      </NavLink>
      <NavLink className="user-actions__link" to="#">
        <FavoriteIcon />
      </NavLink>
      <NavLink className="user-actions__link cart-hidden" to="#">
        <ShoppingCartIcon />
      </NavLink>
    </div>
  );
};
