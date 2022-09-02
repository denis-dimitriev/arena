import { ColorsType, MotorType, RatingType } from "./other-types";

export interface IEScooter extends MotorType {
  weight: string;
  color: ColorsType;
  rating: RatingType;
}
