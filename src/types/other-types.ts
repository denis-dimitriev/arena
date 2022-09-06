export type RegionType = {
  region:
    | "Кишинёв мун."
    | "Бельцы мун."
    | "Тирасполь мун"
    | "Кагул"
    | "Комрат"
    | "Тараклия"
    | "Чимишлия"
    | "Дрокия"
    | "Унгены"
    | "Другое";
};

export type ColorsType = {
  color:
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
};

export type MaterialsType = {
  frameMaterials: "Алюминий" | "Магний" | "Сталь" | "Карбон" | "Другое";
};

export type MotorType = {
  maxSpeed?: string; // rm per hour
  MotorPower?: string; // 350watt
  distancePerCharge?: string;
  batteryCapacity?: string; // 10A
  rechargingTime?: string;
};

export type RatingType = {
  rating: "1" | "2" | "3" | "4" | "5";
};

export type CategoryType = {
  category:
    | "Велосипеды"
    | "Электровелосипеды"
    | "Электроскутеры"
    | "Аксессуары";
};
