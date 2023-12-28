export type CourseTable = {
  id: number;
  name: string;
  price: number;
  NumberOfSections: number;
  published: boolean | null;
};
export type UserTable = {
  id: number;
  email: string;
  name: string;
  phone: string;
  parent_phone: string;
};
export type SectionTable = {
  id: number;
  name: string;
  tag: string;
  published: boolean | null;
};

export type LectureTable = {
  id: number;
  name: string;
  price: number;
  published: boolean | null;
};
