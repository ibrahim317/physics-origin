import React from "react";
import Link from "next/link";
import Image from "next/image";
import Devider from "../Devider";
import { CourseType } from "@/src/types/global";
const CourseCard = ({ course }: { course: CourseType }) => {
  const courseLink = `/course`;
  return (
    <Link
      href={{ pathname: courseLink, query: { id: course.id } }}
      className={`rtl flex min-h-[500px] flex-col gap-10 rounded-lg  p-3 transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:border-y-2 hover:border-solid hover:border-white max-sm:min-h-[350px]`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image
        src={course.thumbnail}
        width={300}
        height={300}
        alt="courseImage"
        className="w-full  rounded-md"
      />
      <h2 className="text-3xl font-bold">{course.name}</h2>
      <div className="-my-5">
        <Devider />
      </div>
      <ul className="text-lg font-light opacity-70 ">
        {course.des.map((text: any, index: number) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </Link>
  );
};

export default CourseCard;
