import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type MobileModalType = {
  openMobileModal: boolean;
  setOpenMobileModal: Dispatch<SetStateAction<boolean>>;
};

export const MobileModalContext = createContext<MobileModalType>({
  openMobileModal: false,
  setOpenMobileModal: () => {},
});

interface IMobileModal {
  children: ReactNode;
}

export const MobileModalProvider: React.FC<IMobileModal> = ({ children }) => {
  const [openMobileModal, setOpenMobileModal] = useState<boolean>(false);

  const valueContext = {
    openMobileModal,
    setOpenMobileModal,
  };
  return (
    <MobileModalContext.Provider value={valueContext}>
      {children}
    </MobileModalContext.Provider>
  );
};
