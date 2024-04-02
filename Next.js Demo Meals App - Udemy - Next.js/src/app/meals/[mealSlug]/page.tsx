import { notFound } from "next/navigation";
import { getMeal } from "@/lib/mealsService";
import MealItemDetail from "@/components/MealsGrid/MealItemDetail/MealItemDetail";
import { Suspense } from "react";
import classes from "./page.module.css";
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
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meal Details...</p>}
        >
          <MealData slug={params.mealSlug} />
        </Suspense>
      </main>
    </>
  );
}

export default MealItemPage;
