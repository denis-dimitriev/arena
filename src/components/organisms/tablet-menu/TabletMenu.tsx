import "./TabletMenu.scss";

import {
  HomeIcon,
  MenuIcon,
  MoreIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "../../../assets";
import { NavLink } from "react-router-dom";

export const TabletMenu = () => {
  return (
    <nav className="tablet-menu">
      <ul className="tablet-menu__list">
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <HomeIcon />
            Главная
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <MenuIcon />
            Каталог
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <ShoppingCartIcon />
            Корзина
          </NavLink>
        </li>
        <li className="list-item search-hidden">
          <NavLink className="item-link" to="#">
            <SearchIcon />
            Поиск
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <MoreIcon />
            Ещё
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
