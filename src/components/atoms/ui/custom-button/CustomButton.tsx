import "./CustomButton.scss";

import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button";
  ghost?: boolean;
  onClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  type = "button",
  ghost,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`button ${ghost && "ghost"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
