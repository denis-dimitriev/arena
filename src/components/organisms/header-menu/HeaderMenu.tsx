import "./HeaderMenu.scss";

import { MenuIcon } from "../../../assets";
import { NavMenu } from "../../molecules/nav-menu/NavMenu";
import { CatalogMenu } from "../../molecules/catalog-menu/CatalogMenu";
import { ButtonGhost } from "../../ui/atoms/button-ghost/ButtonGhost";
import { useState } from "react";

export const HeaderMenu = () => {
  const [open, setIsOpen] = useState<boolean>(false);

  const openCatalogHandler = () => setIsOpen((prevState) => !prevState);
  const closeCatalogHandler = () => setIsOpen(false);

  return (
    <div className="menu-header">
      <div className="menu-header__container">
        <ButtonGhost
          className={`menu-header__menu-button ${open && "open"}`}
          onClick={openCatalogHandler}
        >
          <MenuIcon />
          Категории товаров
        </ButtonGhost>
        <div className="menu-header__nav-menu">
          <NavMenu />
        </div>
        <div
          className={`menu-header__catalog ${open && "open"}`}
          onMouseLeave={closeCatalogHandler}
        >
          <CatalogMenu />
        </div>
      </div>
    </div>
  );
};
