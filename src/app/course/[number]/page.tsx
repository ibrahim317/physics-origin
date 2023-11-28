"use client";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import getCourse from "@/src/lib/getCourse";
import Image from "next/image";

const page = () => {
  const pathname = usePathname();
  const url = pathname;
  const content = getCourse(url)
    .then((course) => {
      return (

        <div className="container">

          <div> {/*/ left side /*/}
            <Image
              src={"/assets/cource.jpg"}
              width={300}
              height={300}
            />
          </div>

          <div className="w-1/2 p-8 rtl"> {/*/ right side /*/}
            <h2 className="font-extrabold m-6 text-7xl max-md:text-5xl">
              {course.name}
            </h2>
            <div className="text-xl opacity-70">{course.des}</div>
          </div>

        </div>

      );
    })
    .catch(() => {
      return <></>;
      redirect("/not-found");
    });
  return content;
};
export default page;
