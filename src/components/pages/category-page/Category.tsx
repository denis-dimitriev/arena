import { Route, Routes } from "react-router-dom";
import Bicycles from "../bicycles/Bicycles";
import EBicycle from "../e-bicycle/EBicycle";
import EScooters from "../e-scooters/EScooters";
import Accessories from "../accesories/Accessories";
import ProductItemPage from "../product-item-page/ProductItemPage";

const Category = () => {
  return (
    <div className="category">
      <Routes>
        <Route path="bicycles" element={<Bicycles />} />
        <Route path="bicycles/:id" element={<ProductItemPage />} />
        <Route path="electric-bicycles" element={<EBicycle />} />
        <Route path="electric-bicycles/:id" element={<ProductItemPage />} />
        <Route path="electric-scooters" element={<EScooters />} />
        <Route path="electric-scooters/:id" element={<ProductItemPage />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="accessories/:id" element={<ProductItemPage />} />
      </Routes>
    </div>
  );
};

export default Category;
