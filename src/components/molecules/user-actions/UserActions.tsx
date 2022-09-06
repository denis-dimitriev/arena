import "./UserActions.scss";

import { FavoriteRedIcon, WatchedIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonBadge } from "../../ui/atoms/button-badge/ButtonBadge";

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
          <FavoriteRedIcon />
        </ButtonBadge>
      </NavLink>
    </div>
  );
};
