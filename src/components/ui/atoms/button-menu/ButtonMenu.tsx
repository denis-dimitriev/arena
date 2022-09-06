import "./ButtonMenu.scss";

import React, { ReactNode } from "react";

interface ButtonMenuProps {
  children: ReactNode;
}

export const ButtonMenu: React.FC<ButtonMenuProps> = ({ children }) => {

  return (
    <button
      type="button"
      className="button-menu"
    >
      {children}
    </button>
  );
};
