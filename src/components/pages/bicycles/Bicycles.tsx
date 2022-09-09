import { ProductList } from "../../organisms/product-list/ProductList";
import { bicycleTestAd } from "../../../models/bicycleAd.model";

const Bicycles = () => {
  return (
    <div>
      <ProductList ads={bicycleTestAd} />
    </div>
  );
};

export default Bicycles;
