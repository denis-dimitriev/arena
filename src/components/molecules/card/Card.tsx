import "./Card.scss";

import React, { useState } from "react";
import { FavoriteIcon, FavoriteRedIcon } from "../../../assets";
import { ButtonGhost } from "../../ui/atoms/button-ghost/ButtonGhost";

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
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="card-info">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-price">{price} mdl</h5>
      </div>
      <div className="card__favorites card__favorites_active">
        <ButtonGhost onClick={() => setLiked(!liked)}>
          {liked ? <FavoriteRedIcon /> : <FavoriteIcon />}
        </ButtonGhost>
      </div>
    </div>
  );
};
