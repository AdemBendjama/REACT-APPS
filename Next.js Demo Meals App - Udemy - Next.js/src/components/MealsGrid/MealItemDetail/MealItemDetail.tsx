import { Meal } from "@/Model/Meal";
import Image from "next/image";
import classes from "./MealItemDetail.module.css";

function MealItemDetail({ meal }: { meal: Meal }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image.path} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealItemDetail;
