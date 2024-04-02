import { StaticImageData } from "next/image";
import MealItem from "./MealItem";
import classes from "./MealsGrid.module.css";
import { Meal } from "@/Model/Meal";

function MealsGrid(props: { meals: Meal[] }) {
  return (
    <ul className={classes.meals}>
      {props.meals.map((meal: Meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
