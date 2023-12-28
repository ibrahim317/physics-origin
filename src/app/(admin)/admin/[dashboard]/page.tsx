import Alert from "@/src/components/Alert";
import React from "react";
import { Button } from "@/src/components/ui/button";
import { fetch_data } from "./data";
import { UserTable, CoursesTable, LectureTable } from "./Table";

const TableTamplate = ({ data, url }: { data: any; url: string }) => {
  switch (url) {
    case "courses":
      return <CoursesTable data={data} />;
    case "users":
      return <UserTable data={data} />;
    case "lectures":
      return <LectureTable data={data} />;
    default:
      break;
  }
};

const page = async ({ params }: { params: { dashboard: string } }) => {
  const data = await fetch_data(params.dashboard);
  return (
    <div className="container mx-auto h-full w-full">
      <h2 className="mt-4 w-full text-center text-2xl font-medium lg:text-4xl">
        {params.dashboard}
      </h2>
      <TableTamplate url={params.dashboard} data={data} />
      <div className=" flex flex-row-reverse p-4">
        <Button variant={"green"} className="self-end" size={"lg"}>
          Create {params.dashboard}
        </Button>
      </div>
      <div className="flex justify-center">
        <Alert
          heading="Is Ibrahim is the Worest?"
          description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          Button="Go to Main"
          GoTo="/"
        />
      </div>
    </div>
  );
};

export default page;
