import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import classes from "./MealItem.module.css";
import img from "@/assets/burger.jpg";
import { Meal } from "@/app/Model/Meal";

function MealItem({ title, slug, creator, summary, image }: Meal) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem;
