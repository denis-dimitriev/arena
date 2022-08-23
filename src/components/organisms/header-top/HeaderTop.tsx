import "./HeaderTop.scss";

import { Logo } from "../../atoms/ui/logo/Logo";
import { Search } from "../../molecules/search/Search";
import { UserActions } from "../../molecules/user-actions/UserActions";
import { CustomButton } from "../../atoms/ui/custom-button/CustomButton";
import { UserIcon } from "../../../assets";

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
            <CustomButton ghost>
              <UserIcon />
            </CustomButton>
          ) : (
            <CustomButton>Войти</CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};
