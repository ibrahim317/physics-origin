import Alert from "@/src/components/Alert";
import React from "react";
import { Course, columns } from "./columns";
import { DataTable } from "@/src/components/data-table";
import { Button } from "@/src/components/ui/button";

function DemoPage() {
  const data = [
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
    {
      id: "728ed52f",
      price: 100,
      NumberOfSections: 3,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

const page = ({ params }: { params: { dashboard: string } }) => {
  return (
    <div className="container mx-auto h-full w-full">
      <h2 className="mt-4 w-full text-center text-2xl font-medium lg:text-4xl">
        {params.dashboard}
      </h2>
      <DemoPage />
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
