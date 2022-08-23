import "./UserActions.scss";

import { FavoriteIcon, ShoppingCartIcon, WatchedIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonBadge } from "../../atoms/ui/button-badge/ButtonBadge";

export const UserActions = () => {
  return (
    <div className="user-actions">
      <NavLink className="user-actions__link" to="#">
        <ButtonBadge>
          <WatchedIcon />
        </ButtonBadge>
      </NavLink>
      <NavLink className="user-actions__link" to="#">
        <ButtonBadge>
          <FavoriteIcon />
        </ButtonBadge>
      </NavLink>
      <NavLink className="user-actions__link cart-hidden" to="#">
        <ButtonBadge>
          <ShoppingCartIcon />
        </ButtonBadge>
      </NavLink>
    </div>
  );
};
