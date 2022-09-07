export type Colors =
  | "Бежевый"
  | "Белый"
  | "Бордовый"
  | "Голубой"
  | "Желтый"
  | "Зелёный"
  | "Золотой"
  | "Коричневый"
  | "Красный"
  | "Малины"
  | "Оранжевый"
  | "Розовый"
  | "Салатовый"
  | "Серебряный"
  | "Серый"
  | "Синий"
  | "Тёмно-зелёный"
  | "Фиолетовый"
  | "Хамелеон"
  | "Черный"
  | "Другое";

export type Materials = "Алюминий" | "Магний" | "Сталь" | "Карбон" | "Другое";

export type Motor = {
  maxSpeed?: string; // rm per hour
  MotorPower?: string; // 350watt
  distancePerCharge?: string;
  batteryCapacity?: string; // 10A
  rechargingTime?: string;
};

export type Rating = {
  rating: "1" | "2" | "3" | "4" | "5";
};
