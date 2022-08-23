import "./MobileModal.scss";

import { ButtonGhost } from "../../atoms/ui/button-ghost/ButtonGhost";
import { CloseIcon } from "../../../assets";
import React, { ReactNode, useContext } from "react";
import { MobileModalContext } from "../../../context/mobile-modal";

interface MobileModalProps {
  children: ReactNode;
  title: "Каталог" | "Корзина" | "Поиск" | "Еще";
}

export const MobileModal: React.FC<MobileModalProps> = ({
  children,
  title,
}) => {
  const { setCallerAction } = useContext(MobileModalContext);

  const closeMenuHandler = () => {
    setCallerAction("close");
  };

  return (
    <div className="mobile-modal">
      <div className="mobile-modal__container">
        <div className="container-top">
          <h2 className="title">{title}</h2>
          <ButtonGhost onClick={closeMenuHandler}>
            <CloseIcon />
          </ButtonGhost>
        </div>
        <div className="container-body">{children}</div>
      </div>
    </div>
  );
};
