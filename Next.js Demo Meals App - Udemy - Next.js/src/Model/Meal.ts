export interface Meal {
  id: string;
  slug: string;
  title: string;
  image: { path: string; file: File | null };
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
