import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type CatalogType = {
  openCatalog: boolean;
  setOpenCatalog: Dispatch<SetStateAction<boolean>>;
};

export const CatalogContext = createContext<CatalogType>({
  openCatalog: false,
  setOpenCatalog: () => {},
});

interface IProvider {
  children: ReactNode;
}

export const CatalogContextProvider: React.FC<IProvider> = ({ children }) => {
  const [openCatalog, setOpenCatalog] = useState<boolean>(false);

  const valueContext = {
    openCatalog,
    setOpenCatalog,
  };

  return (
    <CatalogContext.Provider value={valueContext}>
      {children}
    </CatalogContext.Provider>
  );
};
