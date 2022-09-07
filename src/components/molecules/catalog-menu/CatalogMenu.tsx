import "./CatalogMenu.scss";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MobileModalContext } from "../../../context/mobile-modal";
import { categoryLinks } from "../../../models/category.model";

export const CatalogMenu = () => {
  const { setCloseMobileModal } = useContext(MobileModalContext);

  return (
    <div className="catalog-menu">
      <ul className="catalog-menu__list">
        {categoryLinks.map((link) => (
          <li key={link.id} className="list-item">
            <NavLink
              className="item-link"
              to={link.path}
              onClick={setCloseMobileModal}
            >
              <link.icon />
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
