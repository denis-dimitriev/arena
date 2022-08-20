import "./MobileModal.scss";

import { CustomButton } from "../../atoms/ui/custom-button/CustomButton";
import { CloseIcon } from "../../../assets";
import React, { ReactNode, useContext } from "react";
import { CatalogContext } from "../../../context/catalog.context";
import { MobileModalContext } from "../../../context/mobile-modal";

interface MobileModalProps {
  children: ReactNode;
  title: "Каталог" | "Корзина" | "Еще";
}

export const MobileModal: React.FC<MobileModalProps> = ({
  children,
  title,
}) => {
  const { setOpenCatalog } = useContext(CatalogContext);
  const { setOpenMobileModal } = useContext(MobileModalContext);

  const closeMenuHandler = () => {
    setOpenMobileModal(false);
    setOpenCatalog(false);
  };

  return (
    <div className="mobile-modal">
      <div className="mobile-modal__container">
        <div className="container-top">
          <h2 className="title">{title}</h2>
          <CustomButton ghost onClick={closeMenuHandler}>
            <CloseIcon />
          </CustomButton>
        </div>
        {children}
      </div>
    </div>
  );
};
