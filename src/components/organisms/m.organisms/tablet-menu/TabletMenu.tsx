import "./TabletMenu.scss";

import {
  HomeIcon,
  MenuIcon,
  MoreIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../../../assets";
import { NavLink } from "react-router-dom";
import { CustomButton } from "../../../atoms/ui/custom-button/CustomButton";
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
            <CustomButton ghost onClick={setCloseMobileModal}>
              <HomeIcon />
              <span className="item-title">Главная</span>
            </CustomButton>
          </NavLink>
        </li>
        <li className="tablet-menu__list-item">
          <CustomButton ghost onClick={openCatalogHandler}>
            <MenuIcon />
            <span className="item-title">Каталог</span>
          </CustomButton>
        </li>
        <li className="tablet-menu__list-item">
          <CustomButton ghost onClick={openShoppingCartHandler}>
            <ShoppingCartIcon />
            <span className="item-title">Корзина</span>
          </CustomButton>
        </li>
        <li className="tablet-menu__list-item tablet-menu__list-item_search-hidden">
          <CustomButton ghost onClick={openSearchHandler}>
            <SearchIcon />
            <span className="item-title">Поиск</span>
          </CustomButton>
        </li>
        <li className="tablet-menu__list-item">
          <CustomButton ghost onClick={openMoreCartHandler}>
            <MoreIcon />
            <span className="item-title">Ещё</span>
          </CustomButton>
        </li>
      </ul>
    </div>
  );
};
