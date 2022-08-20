import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type CatalogType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const CatalogContext = createContext<CatalogType>({
  open: false,
  setOpen: () => {},
});

interface IProvider {
  children: ReactNode;
}

export const CatalogContextProvider: React.FC<IProvider> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const valueContext = {
    open,
    setOpen,
  };

  return (
    <CatalogContext.Provider value={valueContext}>
      {children}
    </CatalogContext.Provider>
  );
};
