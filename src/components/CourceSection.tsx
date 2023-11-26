import React from "react";
import Card from "./Card";

const CourceSection = () => {
  return (
    <section className=" bg-[#1c232d] p-3 flex flex-col">
      <div className="flex bg-[#1c232d] max-lg:justify-center flex-row-reverse">
        <h2 className="text-7xl text-white p-10  ">الكورسات</h2>
      </div>
      <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CourceSection;
