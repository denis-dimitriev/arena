import "./Carousel.scss";

import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets";
import { useEffect, useState } from "react";
import { Card } from "../../molecules/card/Card";
import { NavLink } from "react-router-dom";
import { bicycleTestAd } from "../../../models/bicycleAd.model";
import { IBicycle } from "../../../interfaces/bicycle";

export interface Icarousel {
  id: number;
  title: string;
  img: string;
  price: number;
}

export const Carousel = () => {
  const [carousel, setCarousel] = useState<IBicycle[]>([]);
  const [positionX, setPositionX] = useState(0);

  useEffect(() => setCarousel(bicycleTestAd), []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveRightHandler();
    }, 5000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionX]);

  const itemCarouselWidth = 320;
  const itemToShow = 4;
  const totalItem = carousel.length;
  const currentWidthCarousel = itemToShow * itemCarouselWidth;
  const fullWidthCarousel = itemCarouselWidth * totalItem;
  const limitPosition = -Math.abs(fullWidthCarousel - currentWidthCarousel);

  const moveRightHandler = () => {
    setPositionX((prev) => {
      if (prev === limitPosition) {
        return 0;
      }
      return prev - itemCarouselWidth;
    });
  };

  const moveLeftHandler = () => {
    setPositionX((prev) => {
      if (prev === 0) {
        return limitPosition;
      }
      return prev + itemCarouselWidth;
    });
  };

  return (
    <div className="carousel">
      <ul
        className="carousel__list"
        style={{
          transform: `translateX(${positionX}px)`,
        }}
      >
        {carousel.map((card) => (
          <li key={card.id} className="carousel__list-item">
            <NavLink to="#">
              <Card card={card} />
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="carousel__actions">
        <button className="action-btn" onClick={moveLeftHandler}>
          <ArrowLeftIcon />
        </button>
        <button className="action-btn" onClick={moveRightHandler}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
