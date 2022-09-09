import "./ProductList.scss";

import { NavLink } from "react-router-dom";
import React from "react";
import { Card } from "../../molecules/card/Card";
import { IBicycle } from "../../../interfaces/bicycle";

interface ProductListProps {
  ads: IBicycle[];
  title?: string;
  route?: string;
}

export const ProductList: React.FC<ProductListProps> = ({ ads, title, route }) => {
  return (
    <div className="product-list">
      <div className="product-list__top">
        <span className="product-list__title">{title}</span>
      </div>
      <ul className="product-list__list">
        {ads?.map((ad) => {
          const { id } = ad;
          return (
            <li key={id} className="product-list__item">
              <NavLink to={`${id}`}>
                <Card card={ad} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
