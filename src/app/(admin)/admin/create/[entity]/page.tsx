import React from "react";

const page = ({ params }: { params: { entity: string } }) => {
  return (
    <div className=" flex h-full w-full  py-10">
      <h1 className="w-full text-center text-2xl font-medium lg:text-4xl">
        Create {params.entity}
      </h1>
    </div>
  );
};

export default page;
