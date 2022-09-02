import { MobileModal } from "../../molecules/mobile-modal/MobileModal";
import { CatalogMenu } from "../../molecules/catalog-menu/CatalogMenu";
import { Search } from "../../molecules/search/Search";
import { useContext } from "react";
import { CatalogContext } from "../../../context/catalog.context";
import { NavMenu } from "../../molecules/nav-menu/NavMenu";
import { UserActions } from "../../molecules/user-actions/UserActions";

export type ActionCaller = "Каталог" | "Поиск" | "Еще" | "close";

export const MenuCaller = (action: ActionCaller) => {
  const { setOpenCatalog } = useContext(CatalogContext);

  switch (action) {
    case "Каталог": {
      setOpenCatalog(true);
      return (
        <MobileModal title={action}>
          <CatalogMenu />
        </MobileModal>
      );
    }

    case "Поиск":
      setOpenCatalog(false);
      return (
        <MobileModal title={action}>
          <Search />
        </MobileModal>
      );

    case "Еще":
      setOpenCatalog(false);
      return (
        <MobileModal title={action}>
          <UserActions />
          <NavMenu />
        </MobileModal>
      );

    case "close":
    default:
      setOpenCatalog(false);
      return <></>;
  }
};
