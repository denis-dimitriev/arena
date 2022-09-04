import { MobileModal } from "../../molecules/mobile-modal/MobileModal";
import { CatalogMenu } from "../../molecules/catalog-menu/CatalogMenu";
import { Search } from "../../molecules/search/Search";
import { NavMenu } from "../../molecules/nav-menu/NavMenu";
import { UserActions } from "../../molecules/user-actions/UserActions";

export type ActionCaller = "Каталог" | "Поиск" | "Еще" | "close";

export const MenuCaller = (action: ActionCaller) => {

  switch (action) {
    case "Каталог": {
      return (
        <MobileModal title={action}>
          <CatalogMenu />
        </MobileModal>
      );
    }

    case "Поиск":
      return (
        <MobileModal title={action}>
          <Search />
        </MobileModal>
      );

    case "Еще":
      return (
        <MobileModal title={action}>
          <UserActions />
          <NavMenu />
        </MobileModal>
      );

    case "close":
    default:
      return <></>;
  }
};
