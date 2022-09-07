import { Colors, Materials, Motor } from "./other-types";
import { IAdvertisement } from "./advertisement";

export interface IBicycle extends IAdvertisement {
  brand:
    | "AIST"
    | "Author"
    | "Azimut"
    | "Bergamont"
    | "Canyon"
    | "Cube"
    | "Focus"
    | "Giant"
    | "Haibike"
    | "Kross"
    | "Merida"
    | "Scott"
    | "Specialized"
    | "TREK"
    | "Десна"
    | "Другое";
  options: "Женский" | "Мужской" | "Универсальный";
  bicycleType:
    | "Горный"
    | "Шоссейный"
    | "Туристический"
    | "Гибрид"
    | "Городской"
    | "BMX"
    | "Складной"
    | "Детский"
    | "Другое";
  frameSize:
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24";
  wheelSize:
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "27.5"
    | "28"
    | "29"
    | "Другое";
  frameMaterial: Materials;
  brakes: "Барабанный" | "Дисковый" | "Ободной";
  suspension: "Передний" | "Двухподвес" | "Нет";
  components: "Shimano" | "Sram" | "Campagnolo" | "Другой";
  color: Colors;
  condition: "На запчасти" | "Б/у" | "Новый";
  weight: string;
}

export interface IEBicycle extends IBicycle, Motor {}
