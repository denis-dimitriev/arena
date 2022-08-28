import "./HeaderTop.scss";

import { Logo } from "../../atoms/ui/logo/Logo";
import { Search } from "../../molecules/search/Search";
import { UserActions } from "../../molecules/user-actions/UserActions";
import { ButtonGhost } from "../../atoms/ui/button-ghost/ButtonGhost";
import { UserIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonForm } from "../../atoms/ui/button-form/ButtonForm";
import { UserContext } from "../../../context/user.context";
import { useContext, useState } from "react";
import { signOutUser } from "../../../utils/firebase.auth";

export const HeaderTop = () => {
  const [openUserPanel, setOpenUserPanel] = useState<boolean>(false);

  const { currentUser } = useContext(UserContext);

  const onToggleUserPanelHandler = () =>
    setOpenUserPanel((prevState) => !prevState);

  const signOutHandler = async () => {
    await signOutUser();
  };

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
          {currentUser ? (
            <ButtonGhost onClick={onToggleUserPanelHandler}>
              <UserIcon />
            </ButtonGhost>
          ) : (
            <NavLink to="/authentication">
              <ButtonForm>Войти</ButtonForm>
            </NavLink>
          )}
          <div
            className={`top-header__user-panel user-panel 
          ${currentUser && openUserPanel && "user-panel_active"}`}
          >
            <ul className="user-panel__list">
              <li className="user-panel__item">
                <NavLink to="user-page" onClick={onToggleUserPanelHandler}>
                  Общие сведения
                </NavLink>
              </li>
              <li className="user-panel__item">
                <ButtonGhost
                  className="user-panel__button"
                  onClick={signOutHandler}
                >
                  Выйти
                </ButtonGhost>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
