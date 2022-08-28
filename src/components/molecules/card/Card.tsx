import "./Card.scss";

import React from "react";

interface CardProps {
  card: {
    id: number;
    title: string;
    img: string;
    price: number;
  };
}

export const Card: React.FC<CardProps> = ({
  card: { id, title, img, price },
}) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-info">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-price">{price} mdl</h5>
      </div>
    </div>
  );
};
