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
  setCallerAction: Dispatch<SetStateAction<ActionCaller>>;
  renderingMobileMenu: ReactNode;
  setCloseMobileModal: () => void;
};

export const MobileModalContext = createContext<MobileModalType>({
  setCallerAction: () => {},
  renderingMobileMenu: <></>,
  setCloseMobileModal: () => {},
});

interface IMobileModal {
  children: ReactNode;
}

export const MobileModalProvider: React.FC<IMobileModal> = ({ children }) => {
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
        return <></>;
    }
  };

  const setCloseMobileModal = () => {
    const timeout = setTimeout(() => setCallerAction("close"), 100);
    return () => clearTimeout(timeout);
  };

  let renderingMobileMenu = setMobileMenuHandler();

  const valueContext = {
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
