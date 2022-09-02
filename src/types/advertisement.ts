import { CategoryType, RegionType } from "./other-types";

export interface IAdvertisement {
  id: number;
  title: string;
  authorId: number;
  category: CategoryType;
  text: string;
  region: RegionType;
  price: number | "договорная";
  currency: "лей" | "eur" | "usd";
  offer: "Продам" | "Куплю";
  images: [];
  contact: string;
  state: "off" | "visible" | "hidden";
  isFavorite: boolean;
}
