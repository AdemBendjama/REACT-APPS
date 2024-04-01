import { notFound } from "next/navigation";
import classes from "./page.module.css";
import Image from "next/image";
import { Meal } from "@/app/Model/Meal";
import { getMeal } from "@/lib/meals";
import MealItemDetail from "@/components/MealsGrid/MealItemDetail/MealItemDetail";

async function MealData({ slug }: { slug: string }) {
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return <MealItemDetail meal={meal} />;
}

function MealItemPage({ params }: { params: { mealSlug: string } }) {
  return (
    <>
      <MealData slug={params.mealSlug} />
    </>
  );
}

export default MealItemPage;
