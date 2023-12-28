import { ColumnDef } from "@tanstack/react-table";
import MyDropDown from "../components/TableDropDown";
import {
  UserTable,
  CourseTable,
  SectionTable,
  LectureTable,
} from "./types/Tables";

const Action = (entity: string) => {
  return {
    id: "actions",
    cell: ({ row }: { row: any }) => {
      return <MyDropDown entity={`edit/${entity}`} id={row.original.id} />;
    },
  };
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
  Action("user"),
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
    accessorKey: "published",
    header: "Published",
  },
  Action("lecture"),
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
  {
    accessorKey: "tag",
    header: "Tag",
  },
  {
    accessorKey: "published",
    header: "Published",
  },
  Action("section"),
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
  {
    accessorKey: "published",
    header: "Published",
  },
  Action("course"),
];

export const courseColumns: ColumnDef<CourseTable>[] = CourseColumns;
export const lectureColumns: ColumnDef<LectureTable>[] = LectureColumns;
export const userColumns: ColumnDef<UserTable>[] = UserColumns;
export const sectionColumns: ColumnDef<SectionTable>[] = SectionColumns;
