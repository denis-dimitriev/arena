import { BicycleIcon, EBicycleIcon, EScooterIcon, Parts_AccessoriesIcon } from "../assets";

export type Category = "Велосипеды" | "Электровелосипеды" | "Электроскутеры" | "Аксессуары";

export const category: Category[] = ["Велосипеды", "Электровелосипеды", "Электроскутеры", "Аксессуары"];

export enum ECategory {
  bicycles = "Велосипеды",
  electricBicycles = "Электровелосипеды",
  electricScooters = "Электроскутеры",
  accessories = "Аксессуары",
}

export const categoryLinks = [
  { id: 1, path: "category/bicycles", name: "Велосипеды", icon: BicycleIcon },
  {
    id: 2,
    path: "category/electric-bicycles",
    name: "Электровелосипеды",
    icon: EBicycleIcon,
  },
  {
    id: 3,
    path: "category/electric-scooters",
    name: "Электроскутеры",
    icon: EScooterIcon,
  },
  {
    id: 4,
    path: "category/accessories",
    name: "Аксессуары",
    icon: Parts_AccessoriesIcon,
  },
];
