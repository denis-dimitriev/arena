import "./Carousel.scss";

import { ArrowLeftIcon, ArrowRightIcon } from "../../../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Icarousel {
  id: number;
  title: string;
  img: string;
  price: number;
}

const newAdsAdded: Icarousel[] = [
  {
    id: 1,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/259474eb6cb96fee4eed034bc0aac01d.jpg",
    title:
      'Biciclete crosser copii modele noi (aluminiu )frine pe disc 14" 16" 18" 20"',
    price: 2400,
  },
  {
    id: 2,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/a84be9b90a35c843d5df54047d55eeaa.jpg",
    title: "Stevens E - CAYOLLE + 202O",
    price: 28000,
  },
  {
    id: 3,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/ce6f5aec8d4634b786d9694949352732.jpg",
    title: "Cube Stereo-Race carbon 2021-22",
    price: 65745,
  },
  {
    id: 4,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/f60884e383d2f765241c513c0445c241.jpg",
    title: "Bicicleta",
    price: 1154,
  },
  {
    id: 5,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/29b431683e43fa4cc4a8f86d7f75c674.jpg",
    title: 'Велосипед детский почти новый, колеса 16" ',
    price: 850,
  },
  {
    id: 6,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/4e7156690e4697b71ff486937bb14d69.jpg",
    title: "Bicicletă Scott",
    price: 8000,
  },
  {
    id: 7,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/e44067d5ba4c246b07a3b08952130867.jpg",
    title: "Scott",
    price: 5575,
  },
  {
    id: 8,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/b9bf9c29c6add0c2c6d3b19e32133221.jpg",
    title: "Горный велосипед Focus ",
    price: 6000,
  },
  {
    id: 9,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/552d43a988a85636b855db79a4d9ec69.jpg",
    title:
      "Biciclete pentru adolescenti ,,modele unice,,cu lumina ''led'' in rate la 0% comision",
    price: 0,
  },
  {
    id: 10,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/2caba32e87a4d7ff18fd9786a1915eb9.jpg",
    title:
      "Новый bulls 2020год пробег 941 км все родное без пробега в молдове колеса 27.5",
    price: 26598,
  },
  {
    id: 11,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/80838530952206724cc37781e5b723b2.jpg",
    title:
      "New:biciclete pentru dame stilate si comode,posibil in rate la 0% comision",
    price: 0,
  },
  {
    id: 12,
    img: "https://i.simpalsmedia.com/999.md/BoardImages/320x240/d8a238fa9f29a6524e6b91118163c634.jpg",
    title:
      'Biciclete crosser pentru copii modele noi (aluminiu )frine pe disc 14" 16" 18" 20"',
    price: 2600,
  },
];

export const Carousel = () => {
  const [carousel, setCarousel] = useState<Icarousel[]>([]);
  const [positionX, setPositionX] = useState(0);

  useEffect(() => setCarousel(newAdsAdded), []);

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

  useEffect(() => {}, []);

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
      <div
        className="carousel__list"
        style={{
          transform: `translateX(${positionX}px)`,
        }}
      >
        {carousel.map((card) => {
          const { id, title, img, price } = card;
          return (
            <div key={id} className="card">
              <Link to="#">
                <img src={img} alt="" />
                <div className="card-info">
                  <h5 className="card-title">{title}</h5>
                  <h5 className="card-price">{price} mdl</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
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
