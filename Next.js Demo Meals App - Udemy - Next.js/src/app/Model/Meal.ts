import { StaticImageData } from "next/image";

export type Meal = {
  id: string | number;
  slug: string;
  title: string;
  image: StaticImageData;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};
