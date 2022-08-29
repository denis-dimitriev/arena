import "./HeaderMenu.scss";

import { ButtonMenu } from "../../atoms/ui/button-menu/ButtonMenu";
import { MenuIcon } from "../../../assets";
import { NavMenu } from "../../molecules/nav-menu/NavMenu";
import { CatalogMenu } from "../../molecules/catalog-menu/CatalogMenu";

export const HeaderMenu = () => {
  return (
    <div className="menu-header">
      <div className="menu-header__container">
        <ButtonMenu>
          <MenuIcon />
          Категории товаров
        </ButtonMenu>
        <div className="menu-header__nav-menu">
          <NavMenu />
        </div>
        <CatalogMenu />
      </div>
    </div>
  );
};
