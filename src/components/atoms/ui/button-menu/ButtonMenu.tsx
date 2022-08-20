import "./ButtonMenu.scss";

import React, { ReactNode, useContext } from "react";
import { CatalogContext } from "../../../../context/catalog.context";

interface ButtonMenuProps {
  children: ReactNode;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = ({ children }) => {
  const { openCatalog, setOpenCatalog } = useContext(CatalogContext);

  const toggleMenuHandler = () => setOpenCatalog((prev) => !prev);

  return (
    <button
      type="button"
      className={`button-menu ${openCatalog && "open"}`}
      onClick={toggleMenuHandler}
    >
      {children}
    </button>
  );
};
