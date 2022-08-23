import "./NavMenu.scss";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MobileModalContext } from "../../../context/mobile-modal";

export const NavMenu = () => {
  const { setCloseMobileModal } = useContext(MobileModalContext);
  return (
    <nav className="nav-menu">
      <ul className="nav-menu__list">
        <li className="nav-menu__list-item" onClick={setCloseMobileModal}>
          <NavLink className="item-link" to="#">
            О площадке
          </NavLink>
        </li>
        <li className="nav-menu__list-item" onClick={setCloseMobileModal}>
          <NavLink className="item-link" to="#">
            О правилах
          </NavLink>
        </li>
        <li className="nav-menu__list-item" onClick={setCloseMobileModal}>
          <NavLink className="item-link" to="#">
            Сообщить о мошенничестве
          </NavLink>
        </li>
        <li className="nav-menu__list-item" onClick={setCloseMobileModal}>
          <NavLink className="item-link" to="#">
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
