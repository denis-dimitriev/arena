import { Routes, Route, useParams } from "react-router-dom";
import ProductPage from "../product-page/ProductPage";

const Category = () => {
  const { category } = useParams();

  return (
    <div className="category">
      <div className="category__container">
        <h1>Category {category} </h1>
        <Routes>
          <Route path={`${category}/:id`} element={<ProductPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Category;
