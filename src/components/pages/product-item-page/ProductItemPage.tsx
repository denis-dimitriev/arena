import "./ProductItemPage.scss";

import { useParams } from "react-router-dom";

const ProductItemPage = () => {
  const { id } = useParams();

  return (
    <div className="product-page">
      <h1>Product Item Page</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default ProductItemPage;
