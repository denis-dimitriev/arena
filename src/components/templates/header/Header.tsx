import "./Header.scss";

import { HeaderTop } from "../../organisms/header-top/HeaderTop";
import { HeaderMenu } from "../../organisms/header-menu/HeaderMenu";

export const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMenu />
    </header>
  );
};
