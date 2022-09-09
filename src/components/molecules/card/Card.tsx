import "./Card.scss";

import React, { useState } from "react";
import { FavoriteIcon, FavoriteRedIcon } from "../../../assets";
import { ButtonGhost } from "../../ui/atoms/button-ghost/ButtonGhost";
import { IBicycle } from "../../../interfaces/bicycle";

interface CardProps {
  card: IBicycle;
}

export const Card: React.FC<CardProps> = ({ card: { id, title, images, price, currency } }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const cardThumbnail = images[0];

  return (
    <div className="card">
      <img src={cardThumbnail} alt={title} />
      <div className="card-info">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-price">
          {price} {currency}
        </h5>
      </div>
      <div className="card__favorites card__favorites_active">
        <ButtonGhost onClick={() => setLiked(!liked)}>{liked ? <FavoriteRedIcon /> : <FavoriteIcon />}</ButtonGhost>
      </div>
    </div>
  );
};
