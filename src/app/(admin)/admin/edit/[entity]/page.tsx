import NotFound from "@/src/app/not-found";
import React from "react";
import { getEntity } from "./lib/get-entity";
import FormTamplate from "./components/FormTamplate";

const avaiableEnities = ["course", "user", "lecture", "section"];

type pageProps = {
  params: { entity: string };
  searchParams: { id: string };
};

const page: React.FC<pageProps> = async ({ params, searchParams }) => {
  if (!avaiableEnities.includes(params.entity)) {
    return <NotFound />;
  }
  const entity = await getEntity(params.entity, Number(searchParams.id));
  return (
    <div className=" flex h-full w-full  py-10">
      <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
        Edit {params.entity}
      </h1>
      <FormTamplate entityType={params.entity} entity={entity} />
    </div>
  );
};

export default page;
