import "./Homepage.scss";

import { Carousel, newAdsAdded } from "../../organisms/carousel/Carousel";
import { ProductList } from "../../organisms/product-list/ProductList";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Carousel />
        <ProductList title={"Сигвеи"} ads={newAdsAdded} />
      </div>
    </div>
  );
};

export default Homepage;
