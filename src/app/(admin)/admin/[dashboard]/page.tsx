import Alert from "@/src/components/Alert";
import React from "react";
import { Button } from "@/src/components/ui/button";
import { fetch_data } from "./lib/get-entities";
import Link from "next/link";
import NotFound from "@/src/app/not-found";
import TableTamplate from "./components/TableTamplate";

const avaiableDashboards = ["courses", "users", "lectures", "sections"];

const page = async ({ params }: { params: { dashboard: string } }) => {
  if (!avaiableDashboards.includes(params.dashboard)) {
    return <NotFound />;
  }
  const data = await fetch_data(params.dashboard);
  const entity = params.dashboard.slice(0, -1);
  return (
    <div className="container mx-auto h-full w-full">
      <h2 className="mt-4 w-full text-center text-2xl font-medium lg:text-4xl">
        {params.dashboard}
      </h2>
      <TableTamplate url={params.dashboard} data={data} />
      <div className=" flex flex-row-reverse p-4">
        <Link href={`/admin/create/${entity}`}>
          <Button variant={"green"} className="self-end" size={"lg"}>
            Create {params.dashboard}
          </Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Alert
          heading="Is Ibrahim is the Worest? No.. I think"
          description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          Button="Go to Main"
          GoTo="/"
        />
      </div>
    </div>
  );
};

export default page;
