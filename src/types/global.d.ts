import { $Enums } from "@/prisma/generated/client";
import { JsonValue } from "next-auth/adapters";

interface Entity {
  id: number;
}

export interface UserType extends Entity {
  isAdmin: boolean;
  name: string;
  last_name: string;
  phone: string;
  parent_phone: string;
  email: string;
  pass: string;
  courses: number[];
  lectures: number[];
  buying?: string | null;
  progress?: Progress | null;
}
export interface Progress {
  userId: number;
  passed_quizzes: number[];
  quizzes_grades: JsonValue;
}

interface ContentType extends Entity {
  name: string;
  des: string | null;
  published: boolean | null;
  yourlink?: string | null;
}
interface PaidContentType extends ContentType {
  price: number;
}
export interface CourseType extends PaidContentType {
  thumbnail: string;
  section: Section[];
}
export interface LectureType extends PaidContentType {}

export interface SectionType extends ContentType {
  tag: Tag;
  course: Course[];
  questions: Question[];
}

export interface QuestionType extends Entity {
  question_head: string;
  options: string[];
  image?: string | null;
  quiz: Section[];
}

const Tag = $Enums.Tag;
