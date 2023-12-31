import NotFound from "@/src/app/not-found";
import React from "react";
import { getEntity } from "../../lib/get-entity";
import FormTemplate from "../../components/FormTemplate";

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
    <div className=" rtl flex h-full w-full flex-col gap-10  py-10">
      <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
        {entity?.name} Edit {params.entity}
      </h1>
      <div className="container relative">
        <div>
          <FormTemplate entityType={params.entity} entity={entity} />
        </div>
      </div>
    </div>
  );
};

export default page;
