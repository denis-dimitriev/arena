import "./ButtonBadge.scss";

import React, { HTMLProps, ReactNode } from "react";

interface IconBadgeProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  counter?: number;
}

export const ButtonBadge: React.FC<IconBadgeProps> = ({
  children,
  counter = 0,
  onClick,
}) => {
  return (
    <button className="icon-badge" type="button" onClick={onClick}>
      {children}
      <span className="icon-badge__counter">{counter}</span>
    </button>
  );
};
