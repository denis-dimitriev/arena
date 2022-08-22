import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  ActionCaller,
  MenuCaller,
} from "../components/features/menu-caller/MenuCaller";

type MobileModalType = {
  openMobileModal: boolean;
  setOpenMobileModal: Dispatch<SetStateAction<boolean>>;
  setCallerAction: Dispatch<SetStateAction<ActionCaller>>;
  renderingMobileMenu: JSX.Element | undefined;
  setCloseMobileModal: () => void;
};

export const MobileModalContext = createContext<MobileModalType>({
  openMobileModal: false,
  setOpenMobileModal: () => {},
  setCallerAction: () => {},
  renderingMobileMenu: undefined,
  setCloseMobileModal: () => {},
});

interface IMobileModal {
  children: ReactNode;
}

export const MobileModalProvider: React.FC<IMobileModal> = ({ children }) => {
  const [openMobileModal, setOpenMobileModal] = useState<boolean>(false);
  const [callerAction, setCallerAction] = useState<ActionCaller>("close");

  const setMobileMenuHandler = () => {
    switch (callerAction) {
      case "Каталог":
        return MenuCaller(callerAction);
      case "Корзина":
        return MenuCaller(callerAction);
      case "Поиск":
        return MenuCaller(callerAction);
      case "Еще":
        return MenuCaller(callerAction);
      case "close":
      default:
        break;
    }
  };

  const setCloseMobileModal = () => {
    const timeout = setTimeout(() => setCallerAction("close"), 300);
    return () => clearTimeout(timeout);
  };

  const renderingMobileMenu = setMobileMenuHandler();

  const valueContext = {
    openMobileModal,
    setOpenMobileModal,
    setCallerAction,
    renderingMobileMenu,
    setCloseMobileModal,
  };
  return (
    <MobileModalContext.Provider value={valueContext}>
      {children}
    </MobileModalContext.Provider>
  );
};
