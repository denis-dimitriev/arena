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
  setCloseCatalogHandler: () => void;
};

export const CatalogContext = createContext<CatalogType>({
  openCatalog: false,
  setOpenCatalog: () => {},
  setCloseCatalogHandler: () => {},
});

interface IProvider {
  children: ReactNode;
}

export const CatalogContextProvider: React.FC<IProvider> = ({ children }) => {
  const [openCatalog, setOpenCatalog] = useState<boolean>(false);

  const setCloseCatalogHandler = () => {
    const timeout = setTimeout(
      () => openCatalog && setOpenCatalog(!openCatalog),
      100
    );
    return () => clearTimeout(timeout);
  };

  const valueContext = {
    openCatalog,
    setOpenCatalog,
    setCloseCatalogHandler,
  };

  return (
    <CatalogContext.Provider value={valueContext}>
      {children}
    </CatalogContext.Provider>
  );
};
