import "./HeaderTop.scss";

import { Logo } from "../../ui/atoms/logo/Logo";
import { Search } from "../../molecules/search/Search";
import { UserActions } from "../../molecules/user-actions/UserActions";
import { ButtonGhost } from "../../ui/atoms/button-ghost/ButtonGhost";
import { UserIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonForm } from "../../ui/atoms/button-form/ButtonForm";
import { UserContext } from "../../../context/user.context";
import { useContext, useState } from "react";
import { signOutUser } from "../../../utils/firebase.auth";

export const HeaderTop = () => {
  const { currentUser } = useContext(UserContext);

  const [active, setActive] = useState<boolean>(false);

  const onToggleUserPanel = () => setActive((prevState) => !prevState);
  const onCloseUserPanel = () => setActive((prevState) => !prevState);

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
            <ButtonGhost onClick={onToggleUserPanel}>
              <UserIcon />
            </ButtonGhost>
          ) : (
            <NavLink to="authentication">
              <ButtonForm>Войти</ButtonForm>
            </NavLink>
          )}
          <div
            className={`top-header__user-panel user-panel ${
              active && "active"
            }`}
            onMouseLeave={onCloseUserPanel}
          >
            <ul className="user-panel__list">
              <li className="user-panel__item">
                <NavLink to="user-page">Объявления</NavLink>
              </li>
              <li className="user-panel__item">
                <NavLink to="user-page">Общие сведения</NavLink>
              </li>
              <li className="user-panel__item">
                <NavLink to="add-new-advertisement">Подать объявление</NavLink>
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
