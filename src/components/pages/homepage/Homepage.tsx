import "./Homepage.scss";

import { ProductList } from "../../organisms/product-list/ProductList";
import { Outlet } from "react-router-dom";
import { bicycleTestAd } from "../../../models/bicycleAd.model";

const Homepage = () => {
  return (
    <div className="homepage">
      <ProductList title={"Сигвеи"} ads={bicycleTestAd} />
      <Outlet />
    </div>
  );
};

export default Homepage;
