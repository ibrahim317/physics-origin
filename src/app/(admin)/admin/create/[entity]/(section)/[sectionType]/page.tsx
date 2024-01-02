import NotFound from "@/src/app/not-found";
import React from "react";
import FormTemplate from "@/src/app/(admin)/admin/components/FormTemplate";

interface sectionTypeProps {
  params: { sectionType: string };
  searchParams: { courseid: string };
}

const avaiableSecitonTypes = ["quiz", "video", "file"];

const page = ({ params, searchParams }: sectionTypeProps) => {
  if (
    !avaiableSecitonTypes.includes(params.sectionType) ||
    !searchParams.courseid
  )
    return <NotFound />;
  return (
    <div className=" rtl flex h-full w-full flex-col gap-10  py-10">
      <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
        Create {params.sectionType} in Course {searchParams.courseid}
      </h1>
      <div className="container relative">
        <div>
          <FormTemplate
            entityType={params.sectionType}
            options={searchParams.courseid}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
