import "./CatalogMenu.scss";

import { NavLink } from "react-router-dom";
import {
  BicycleIcon,
  EBicycleIcon,
  EScooterIcon,
  Parts_AccessoriesIcon,
} from "../../../assets";
import { useContext } from "react";
import { MobileModalContext } from "../../../context/mobile-modal";

export const CatalogMenu = () => {
  const { setCloseMobileModal } = useContext(MobileModalContext);

  return (
    <div className="catalog-menu">
      <ul className="catalog-menu__list">
        <li className="list-item">
          <NavLink className="item-link" to="#" onClick={setCloseMobileModal}>
            <BicycleIcon />
            Велосипеды
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#" onClick={setCloseMobileModal}>
            <EBicycleIcon />
            Электровелосипеды
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#" onClick={setCloseMobileModal}>
            <EScooterIcon />
            Электросамокаты
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#" onClick={setCloseMobileModal}>
            <Parts_AccessoriesIcon />
            Аксессуары
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
