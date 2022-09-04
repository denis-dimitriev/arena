import "./Homepage.scss";

import { Carousel, newAdsAdded } from "../../organisms/carousel/Carousel";
import { ProductList } from "../../organisms/product-list/ProductList";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <ProductList title={"Сигвеи"} ads={newAdsAdded} />
      <Outlet />
    </div>
  );
};

export default Homepage;
