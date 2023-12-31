import NotFound from "@/src/app/not-found";
import React from "react";

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
  return <div>{params.sectionType}</div>;
};

export default page;
