"use client";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import getCourse from "@/src/lib/getCourse";

const page = () => {
  const pathname = usePathname();
  const url = pathname;
  const content = getCourse(url)
    .then((course) => {
      return (
        <section className="p-8 rtl">
          <h2 className="font-extrabold m-6 text-7xl max-md:text-5xl">
            {course.name}
          </h2>
          <div className="text-xl opacity-70">{course.des}</div>
        </section>
      );
    })
    .catch(() => {
      return <></>;
      redirect("/not-found");
    });
  return content;
};
export default page;
