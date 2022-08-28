import "./ProductList.scss";

import { NavLink } from "react-router-dom";
import React from "react";
import { Icarousel } from "../carousel/Carousel";
import { Card } from "../../molecules/card/Card";

interface ProductListProps {
  ads: Icarousel[];
  title?: string;
}

export const ProductList: React.FC<ProductListProps> = ({ ads, title }) => {
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
              <NavLink to="#">
                <Card card={ad} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
