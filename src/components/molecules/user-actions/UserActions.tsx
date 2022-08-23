import "./UserActions.scss";

import { FavoriteIcon, ShoppingCartIcon, WatchedIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { IconBadge } from "../../atoms/ui/icon-badge/IconBadge";

export const UserActions = () => {
  return (
    <div className="user-actions">
      <NavLink className="user-actions__link" to="#">
        <IconBadge>
          <WatchedIcon />
        </IconBadge>
      </NavLink>
      <NavLink className="user-actions__link" to="#">
        <IconBadge>
          <FavoriteIcon />
        </IconBadge>
      </NavLink>
      <NavLink className="user-actions__link cart-hidden" to="#">
        <IconBadge>
          <ShoppingCartIcon />
        </IconBadge>
      </NavLink>
    </div>
  );
};
