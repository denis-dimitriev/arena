import "./HeaderTop.scss";

import { Logo } from "../../atoms/ui/logo/Logo";
import { Search } from "../../molecules/search/Search";
import { UserActions } from "../../molecules/user-actions/UserActions";
import { ButtonGhost } from "../../atoms/ui/button-ghost/ButtonGhost";
import { UserIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonForm } from "../../atoms/ui/button-form/ButtonForm";

export const HeaderTop = () => {
  const login = false;

  return (
    <div className="top-header">
      <div className="top-header__container">
        <Logo />
        <div className="top-header__search">
          <Search />
        </div>
        <div className="top-header__user-actions">
          <div className="top-header__user-actions top-header__user-actions_close">
            <UserActions />
          </div>
          {login ? (
            <ButtonGhost>
              <UserIcon />
            </ButtonGhost>
          ) : (
            <NavLink to="/authentication">
              <ButtonForm>Войти</ButtonForm>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
