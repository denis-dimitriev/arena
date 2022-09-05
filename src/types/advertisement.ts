import { CategoryType, RegionType } from "./other-types";
import { IBicycle, IEBicycle } from "./bicycle";
import { IEScooter } from "./e-scooter";
import { IAccessories } from "./accessories";

export interface IAdvertisement {
  id: number;
  authorId: number;
  title: string;
  category: CategoryType;
  text: string;
  region: RegionType;
  currency: "лей" | "eur" | "usd";
  offer: "Продам" | "Куплю";
  images: [];
  bicycle?: IBicycle;
  ebicycle?: IEBicycle;
  escooter?: IEScooter;
  accessories?: IAccessories;
  price: number | "договорная";
  contact: string;
  state: "off" | "visible" | "hidden";
  isFavorite: boolean;
}
