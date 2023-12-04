import React from "react";
import Link from "next/link";
import AddCourse from "./AddCourse";

const page = () => {
  return (
    <section className="w-full h-min">
      <Link
        href={".."}
        className="absolute top-11 left-0 text-4xl bg-green-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
      >
        رجوع
      </Link>
      <div className="w-full h-4/5 flex justify-center items-center">
        <AddCourse />
      </div>
    </section>
  );
};

export default page;
