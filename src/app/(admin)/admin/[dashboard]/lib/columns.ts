import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CourseTable = {
  id: number;
  name: string;
  price: number;
  NumberOfSections: number;
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
};

export type LectureTable = {
  id: number;
  name: string;
  price: number;
};

const UserColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "parent_phone",
    header: "Parent Phone",
  },
];
const LectureColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "tag",
    header: "Tag",
  },
];
const SectionColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
];
const CourseColumns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "NumberOfSections",
    header: "Number of sections",
  },
];

export const courseColumns: ColumnDef<CourseTable>[] = CourseColumns;
export const lectureColumns: ColumnDef<LectureTable>[] = LectureColumns;
export const userColumns: ColumnDef<UserTable>[] = UserColumns;
export const sectionColumns: ColumnDef<SectionTable>[] = SectionColumns;
