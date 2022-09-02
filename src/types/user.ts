import { RatingType, RegionType } from "./other-types";

export interface IUser {
  id: string;
  username: string;
  email: string;
  address: string;
  contact: string;
  photo: string;
  password: string;
  dateRegistration: Date;
  region: RegionType;
  rating: RatingType;
  ads: [];
  adsHistory: [];
  favorites: [];
  watchedHistory: [];
}
