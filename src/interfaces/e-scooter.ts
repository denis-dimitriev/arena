import { Colors, Motor, Rating } from "./other-types";

export interface IEScooter extends Motor {
  weight: string;
  color: Colors;
  rating: Rating;
}
