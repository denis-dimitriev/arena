import "./Card.scss";

import { Link } from "react-router-dom";
import React from "react";

interface CardProps {
  id: number;
  title: string;
  img: string;
  price: number;
}

export const Card: React.FC<CardProps> = ({ id, title, img, price }) => {
  return (
    <div key={id} className="card">
      <Link to="#">
        <img src={img} alt={title} />
        <div className="card-info">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-price">{price} mdl</h5>
        </div>
      </Link>
    </div>
  );
};
