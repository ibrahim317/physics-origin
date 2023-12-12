import { $Enums } from "@/prisma/generated/client";

export interface UserType {
  isAdmin: boolean;
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  parent_phone: string;
  email: string;
  pass: string;
  courses: number[];
  lectures: number[];
  buying?: string | null;
}

export interface CourseType {
  id: number;
  name: string;
  des: string[];
  price: number;
  thumbnail: string;
  section: Section[];
}

export interface SectionType {
  id: number;
  name: string;
  des: string[];
  tag: Tag;
  thumbnail?: string | null;
  yourlink?: string | null;
  course: Course[];
  questions: Question[];
  price?: number | null;
}

export interface QuestionType {
  id: number;
  text: string;
  options: string[];
  image?: string | null;
  quiz: Section[];
}

const Tag = $Enums.Tag;
