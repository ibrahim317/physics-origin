"use client";
import { courseColumns, lectureColumns, userColumns } from "./columns";
import { DataTable } from "@/src/components/data-table";

export function CoursesTable({ data }: { data: any }) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={courseColumns} data={data as any} />
    </div>
  );
}
export function LectureTable({ data }: { data: any }) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={lectureColumns} data={data as any} />
    </div>
  );
}
export function UserTable({ data }: { data: any }) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={userColumns} data={data as any} />
    </div>
  );
}
