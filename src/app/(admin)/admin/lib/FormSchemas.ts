import * as z from "zod";
export const LectureFormSchema = z.object({
  name: z.string().min(5, {
    message: "Course Name must be at least 5 characters",
  }),
  price: z.number().min(0, { message: "Course Price must be at least 0 " }),
  published: z.boolean(),
});

export const SectionFormSchema = z.object({
  name: z.string().min(5, {
    message: "Course Name must be at least 5 characters",
  }),
  price: z.number().min(0, { message: "Course Price must be at least 0 " }),
  published: z.boolean(),
});

export const UserFormSchema = z.object({
  Name: z.string().min(5, {
    message: "Course Name must be at least 5 characters",
  }),
  Price: z.number().min(0, { message: "Course Price must be at least 0 " }),
  Published: z.boolean(),
});

export const CourseFormSchema = z.object({
  name: z.string().min(5, {
    message: "Course Name must be at least 5 characters",
  }),
  price: z.number().min(0, { message: "Course Price must be at least 0 " }),
  published: z.boolean(),
});
