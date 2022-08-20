import "./Search.scss";

import { SearchIcon } from "../../../assets";

export const Search = () => {
  return (
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="...Поиск" />
      <button type="submit" className="search__button">
        <SearchIcon />
      </button>
    </form>
  );
};
