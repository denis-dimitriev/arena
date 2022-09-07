import { Category } from "../models/category.model";
import { Region } from "../models/region.model";

export interface IAdvertisement {
  id: number;
  authorId: number;
  title: string;
  category: Category;
  description: string;
  region: Region;
  offer: "Продам" | "Куплю";
  images: Array<string>;
  price: number | "договорная";
  currency: "лей" | "eur" | "usd";
  contact: string;
  state: "off" | "visible" | "hidden";
  isFavorite: boolean;
}
