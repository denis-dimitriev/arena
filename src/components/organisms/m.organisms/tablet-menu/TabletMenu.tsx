import "./TabletMenu.scss";

import {
  HomeIcon,
  MenuIcon,
  MoreIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../../../assets";
import { NavLink } from "react-router-dom";
import { ButtonGhost } from "../../../atoms/ui/button-ghost/ButtonGhost";
import React, { useContext } from "react";
import { MobileModalContext } from "../../../../context/mobile-modal";

export const TabletMenu = () => {
  const { setCallerAction, setCloseMobileModal } =
    useContext(MobileModalContext);

  const openCatalogHandler = () => setCallerAction("Каталог");
  const openShoppingCartHandler = () => setCallerAction("Корзина");
  const openSearchHandler = () => setCallerAction("Поиск");
  const openMoreCartHandler = () => setCallerAction("Еще");

  return (
    <div className="tablet-menu">
      <ul className="tablet-menu__list">
        <li className="tablet-menu__list-item">
          <NavLink className="item-link" to="#">
            <ButtonGhost onClick={setCloseMobileModal}>
              <HomeIcon />
              <span className="item-title">Главная</span>
            </ButtonGhost>
          </NavLink>
        </li>
        <li className="tablet-menu__list-item">
          <ButtonGhost onClick={openCatalogHandler}>
            <MenuIcon />
            <span className="item-title">Каталог</span>
          </ButtonGhost>
        </li>
        <li className="tablet-menu__list-item">
          <ButtonGhost onClick={openShoppingCartHandler}>
            <ShoppingCartIcon />
            <span className="item-title">Корзина</span>
          </ButtonGhost>
        </li>
        <li className="tablet-menu__list-item tablet-menu__list-item_search-hidden">
          <ButtonGhost onClick={openSearchHandler}>
            <SearchIcon />
            <span className="item-title">Поиск</span>
          </ButtonGhost>
        </li>
        <li className="tablet-menu__list-item">
          <ButtonGhost onClick={openMoreCartHandler}>
            <MoreIcon />
            <span className="item-title">Ещё</span>
          </ButtonGhost>
        </li>
      </ul>
    </div>
  );
};
