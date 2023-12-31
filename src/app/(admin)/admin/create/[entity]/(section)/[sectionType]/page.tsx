import NotFound from "@/src/app/not-found";
import React from "react";

interface sectionTypeProps {
  params: { sectionType: string };
}

const avaiableSecitonTypes = ["quiz", "video", "file"];

const page = ({ params }: sectionTypeProps) => {
  if (!avaiableSecitonTypes.includes(params.sectionType)) return <NotFound />;
  return <div>{params.sectionType}</div>;
};

export default page;
