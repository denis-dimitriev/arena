import "./Search.scss";

import { SearchIcon } from "../../../assets";
import { useContext } from "react";
import { MobileModalContext } from "../../../context/mobile-modal";

export const Search = () => {
  const { setCloseMobileModal } = useContext(MobileModalContext);

  return (
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="...Поиск" />
      <button
        type="submit"
        className="search__button"
        onClick={setCloseMobileModal}
      >
        <SearchIcon />
      </button>
    </form>
  );
};
