import "./CatalogMenu.scss";

import { NavLink } from "react-router-dom";
import {
  BicycleIcon,
  EBicycleIcon,
  EScooterIcon,
  Parts_AccessoriesIcon,
} from "../../../assets";
import { useContext } from "react";
import { CatalogContext } from "../../../context/catalog.context";

export const CatalogMenu = () => {
  const { open } = useContext(CatalogContext);

  return (
    <div className={`catalog-menu ${open && "open"}`}>
      <ul className="catalog-menu__list">
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <BicycleIcon />
            Велосипеды
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <EBicycleIcon />
            Электровелосипеды
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <EScooterIcon />
            Электросамокаты
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink className="item-link" to="#">
            <Parts_AccessoriesIcon />
            Аксессуары
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
