import "./ButtonMenu.scss";

import React, { ReactNode, useContext } from "react";
import { CatalogContext } from "../../../../context/catalog.context";

interface ButtonMenuProps {
  children: ReactNode;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = ({ children }) => {
  const { open, setOpen } = useContext(CatalogContext);

  const toggleMenuHandler = () => setOpen((prev) => !prev);

  return (
    <button
      type="button"
      className={`button-menu ${open && "open"}`}
      onClick={toggleMenuHandler}
    >
      {children}
    </button>
  );
};
