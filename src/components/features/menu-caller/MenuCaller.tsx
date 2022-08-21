import { MobileModal } from "../../molecules/mobile-modal/MobileModal";
import { CatalogMenu } from "../../molecules/catalog-menu/CatalogMenu";
import { Search } from "../../molecules/search/Search";
import { useContext } from "react";
import { CatalogContext } from "../../../context/catalog.context";
import { MobileModalContext } from "../../../context/mobile-modal";

export type ActionCaller = "Каталог" | "Корзина" | "Поиск" | "Еще" | "close";

export const MenuCaller = (action: ActionCaller) => {
  const { setOpenCatalog } = useContext(CatalogContext);
  const { setOpenMobileModal } = useContext(MobileModalContext);

  switch (action) {
    case "Каталог": {
      setOpenMobileModal(true);
      setOpenCatalog(true);
      return (
        <MobileModal title={action}>
          <CatalogMenu />
        </MobileModal>
      );
    }

    case "Корзина":
      setOpenMobileModal(true);
      setOpenCatalog(false);
      return (
        <MobileModal title={action}>
          <h1>Shopping Cart</h1>
        </MobileModal>
      );

    case "Поиск":
      setOpenMobileModal(true);
      setOpenCatalog(false);
      return (
        <MobileModal title={action}>
          <Search />
        </MobileModal>
      );

    case "Еще":
      setOpenMobileModal(true);
      setOpenCatalog(false);
      return (
        <MobileModal title={action}>
          <h1>More</h1>
        </MobileModal>
      );

    case "close":
    default:
      setOpenMobileModal(false);
      setOpenCatalog(false);
      break;
  }
};
