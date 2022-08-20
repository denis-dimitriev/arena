import "./NavMenu.scss";

import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="list__item">
          <NavLink className="item-link" to="#">
            О площадке
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink className="item-link" to="#">
            О правилах
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink className="item-link" to="#">
            Сообщить о мошенничестве
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink className="item-link" to="#">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
