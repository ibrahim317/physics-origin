import NotFound from "@/src/app/not-found";
import React from "react";
import FormTemplate from "../../components/FormTemplate";

const avaiableEnities = ["course", "user", "lecture", "section"];

type pageProps = {
  params: { entity: string };
  searchParams: { courseid: number };
};

const page = ({ searchParams, params }: pageProps) => {
  if (!avaiableEnities.includes(params.entity)) {
    return <NotFound />;
  }
  return (
    <div className=" rtl flex h-full w-full flex-col gap-10  py-10">
      <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
        Create {params.entity}
      </h1>
      <div className="container relative">
        <div>
          <FormTemplate
            entityType={params.entity}
            options={searchParams.courseid}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
