"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { saveMeal } from "./mealsService";

import { Meal } from "@/Model/Meal";
import { State } from "@/Model/ShareMealsForm";

function isInvalidText(text: string | null) {
  return !text || text.trim() === "";
}

export async function shareMealsFormAction(
  prevState: State,
  formData: FormData
) {
  const title = formData.get("title") as string | null;
  const summary = formData.get("summary") as string | null;
  const instructions = formData.get("instructions") as string | null;
  const image = formData.get("image") as File | null;
  const creator = formData.get("name") as string | null;
  const creator_email = formData.get("email") as string | null;

  if (
    isInvalidText(title) ||
    isInvalidText(summary) ||
    isInvalidText(instructions) ||
    isInvalidText(creator) ||
    isInvalidText(creator_email) ||
    !creator_email?.includes("@") ||
    !image ||
    image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  const meal: Meal = {
    id: "",
    slug: "",
    title: title!,
    image: { path: "", file: image },
    summary: summary!,
    instructions: instructions!,
    creator: creator!,
    creator_email: creator_email!,
  };

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
