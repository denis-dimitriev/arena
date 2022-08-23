import "./ButtonGhost.scss";

import React, { HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonGhost: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={`${className} button-ghost`} onClick={onClick}>
      {children}
    </button>
  );
};
