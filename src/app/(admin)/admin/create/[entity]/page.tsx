import NotFound from "@/src/app/not-found";
import React from "react";
import FormTemplate from "../../components/FormTemplate";

const avaiableEnities = ["course", "user", "lecture", "section"];

type pageProps = {
  params: { entity: string };
};

const page = ({ params }: pageProps) => {
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
          <FormTemplate entityType={params.entity} />
        </div>
      </div>
    </div>
  );
};
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

export default page;
