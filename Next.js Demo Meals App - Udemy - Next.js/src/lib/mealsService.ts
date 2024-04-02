import { Meal } from "@/Model/Meal";
import sql from "better-sqlite3";
import slugify from "slugify";
import { v4 as uuid4 } from "uuid";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const result = db.prepare("SELECT * FROM meals").all();
  const meals: Meal[] = result.map((row: any) => {
    const meal: Meal = {
      id: row.id,
      slug: row.slug,
      title: row.title,
      image: { path: row.image, file: null },
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
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
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
    image: { path: result.image, file: null },
    summary: result.summary,
    instructions: result.instructions,
    creator: result.creator,
    creator_email: result.creator_email,
  };

  return meal;
}

export async function saveMeal(meal: Meal) {
  const generateSlug = slugify(meal.title, { lower: true });

  const extension = meal.image.file!.name.split(".").pop();
  const fileName = `${generateSlug}-${uuid4()}.${extension}`;
  const path = `/images/${fileName}`;

  const stream = fs.createWriteStream(`public${path}`);
  const bufferedImage = await meal.image.file!.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.slug = `${generateSlug}-${Date.now()}`;
  meal.instructions = xss(meal.instructions);
  meal.image.path = path;

  db.prepare(
    `INSERT INTO meals (
        title,
        summary,
        instructions,
        creator,
        creator_email,
        image,
        slug
    )
    VALUES (?,?,?,?,?,?,?)`
  ).run(
    meal.title,
    meal.summary,
    meal.instructions,
    meal.creator,
    meal.creator_email,
    meal.image.path,
    meal.slug
  );

  return true;
}
