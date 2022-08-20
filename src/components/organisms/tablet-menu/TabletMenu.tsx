import "./TabletMenu.scss";

import {
  HomeIcon,
  MenuIcon,
  MoreIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../../assets";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CatalogContext } from "../../../context/catalog.context";
import { MobileModalContext } from "../../../context/mobile-modal";
import { CustomButton } from "../../atoms/ui/custom-button/CustomButton";

export const TabletMenu = () => {
  const { setOpenCatalog } = useContext(CatalogContext);
  const { setOpenMobileModal } = useContext(MobileModalContext);

  const openMenuHandler = () => {
    setOpenMobileModal(true);
    setOpenCatalog(true);
  };

  return (
    <div className="tablet-menu">
      <ul className="tablet-menu__list">
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <HomeIcon />
            Главная
          </NavLink>
        </li>
        <li className="list-item">
          <CustomButton ghost onClick={openMenuHandler}>
            <MenuIcon />
            Каталог
          </CustomButton>
        </li>
        <li className="list-item">
          <CustomButton ghost>
            <ShoppingCartIcon />
            Корзина
          </CustomButton>
        </li>
        <li className="list-item search-hidden">
          <CustomButton ghost>
            <SearchIcon />
            Поиск
          </CustomButton>
        </li>
        <li className="list-item">
          <CustomButton ghost>
            <MoreIcon />
            Ещё
          </CustomButton>
        </li>
      </ul>
    </div>
  );
};
