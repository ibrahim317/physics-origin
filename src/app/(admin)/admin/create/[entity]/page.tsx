import NotFound from "@/src/app/not-found";
import React from "react";
import CreateCourse from "./components/CreateCourse";
import CreateLecture from "./components/CreateLecture";
import CreateUser from "./components/CreateUser";
import CreateSection from "./components/CreateSection";

const avaiableEnities = ["course", "user", "lecture", "section"];

type pageProps = {
  params: { entity: string };
  searchParams: { courseid: string };
};

const page = ({ params, searchParams }: pageProps) => {
  if (!avaiableEnities.includes(params.entity)) {
    return <NotFound />;
  }

  switch (params.entity) {
    case "course":
      return <CreateCourse />;
    case "user":
      return <CreateUser />;
    case "lecture":
      return <CreateLecture />;
    case "section":
      return <CreateSection courseid={Number(searchParams.courseid)} />;
  }
  // return (
  //   <div className=" flex h-full w-full  py-10">
  //     <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
  //       Create {params.entity}
  //     </h1>
  //   </div>
  // Course Form
  // Name , Description , Price ,Image, Published , ??Sections??
  // Section Form
  // VIDEO Form -> Course , Name , Description , Published , Video Link
  // QUIZ Form  -> Course , Name , Description , Published , ??Questions??
  // FILE Form  -> Course , Name , Description , Published , FILE Link
  // Lecure Form
  // Name, Description , Price, Image, Published
  // );
};

export default page;
