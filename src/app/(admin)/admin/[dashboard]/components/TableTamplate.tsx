import React from "react";
import { UserTable, CoursesTable, LectureTable, SectionTable } from "./Tables";

const TableTamplate = ({ data, url }: { data: any; url: string }) => {
  switch (url) {
    case "courses":
      return <CoursesTable data={data} />;
    case "users":
      return <UserTable data={data} />;
    case "lectures":
      return <LectureTable data={data} />;
    case "sections":
      return <SectionTable data={data} />;
    default:
      break;
  }
};
export default TableTamplate;
