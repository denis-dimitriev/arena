import { Rating } from "./other-types";
import { Region } from "../models/region.model";

export interface IUser {
  id: string;
  username: string;
  email: string;
  address: string;
  contact: string;
  photo: string;
  password: string;
  dateRegistration: Date;
  region: Region;
  rating: Rating;
  ads: [];
  adsHistory: [];
  favorites: [];
  watchedHistory: [];
}
