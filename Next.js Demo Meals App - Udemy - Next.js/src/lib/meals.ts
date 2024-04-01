import { Meal } from "@/app/Model/Meal";
import sql from "better-sqlite3";
import { StaticImageData } from "next/image";
const db = sql("meals.db");

export async function getMeals() {
  const result = db.prepare("SELECT * FROM meals").all();
  const meals: Meal[] = result.map((row: any) => {
    const meal: Meal = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      image: row.image as StaticImageData,
      summary: row.summary,
      instructions: row.instructions,
      creator: row.creator,
      creator_email: row.creator_email,
    };
    return meal;
  });

  return meals;
}

export async function getMeal(slug: string) {
  const result: any = db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug);

  if (!result) {
    return null;
  }

  result.instructions = result.instructions.replace(/\n/g, "<br/>");

  const meal: Meal = {
    id: result.id,
    slug: result.slug,
    title: result.title,
    image: result.image as StaticImageData,
    summary: result.summary,
    instructions: result.instructions,
    creator: result.creator,
    creator_email: result.creator_email,
  };

  return meal;
}
