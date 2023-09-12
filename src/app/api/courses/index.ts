import { ICourse } from "@/app/interfaces";

export const retriveCourses = async (): Promise<ICourse[]> => {
  const courses = await fetch("http://localhost:3001/").then((response) =>
    response.json()
  );
  return courses;
};
