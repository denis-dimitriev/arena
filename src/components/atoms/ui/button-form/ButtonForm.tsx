import "./ButtonForm.scss";

import React, { HTMLProps, ReactNode } from "react";

interface ButtonFormProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
  children,
  onClick,
}) => {
  return (
    <button type="submit" className="button-form" onClick={onClick}>
      {children}
    </button>
  );
};
