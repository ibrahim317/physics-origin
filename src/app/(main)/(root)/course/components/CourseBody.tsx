import React from "react";
import Content from "./ContentSection";
import PayButton from "./PayButton";
import Image from "next/image";
import Devider from "@/src/components/Devider";
import { CourseType } from "@/src/types/global";
interface props {
  course: CourseType;
  paid_course: boolean;
}
const CourseBody: React.FC<props> = ({ course, paid_course }) => {
  return (
    <section className="rtl flex flex-col gap-11  p-8">
      <div className="my-6 flex max-h-fit w-full justify-between gap-6 max-[660px]:flex-col-reverse ">
        <div className="[660px]:max-w-[50vw] rounded-xl  p-5 duration-200 max-[660px]:max-w-none max-[660px]:bg-[#2c3342] max-[660px]:shadow-md max-[660px]:hover:scale-105">
          <div className="flex h-full flex-col justify-between gap-10">
            <div>
              <h2 className="my-6 text-7xl  font-extrabold max-[1000px]:text-5xl max-md:text-center max-[760px]:text-4xl">
                {course.name}
              </h2>
              <ul className="m-3 text-lg font-light opacity-70 ">
                {course.des.map((text: any, index: number) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center gap-7">
              <PayButton course={course} paid={paid_course} />
            </div>
          </div>
        </div>
        <div className="min-w-[50%] max-sm:min-w-[calc(330px*0.8)]   ">
          <Image
            src={course.thumbnail ? course.thumbnail : ""}
            width={300}
            height={100}
            alt="courseImage"
            className="min-h-[200px] w-full  max-w-[900px] rounded-[14px] border-8 border-solid border-white border-opacity-5"
          />
        </div>
      </div>
      <Devider />
      <div className="flex flex-col items-center rounded-xl p-5 max-[660px]:max-w-none max-[660px]:bg-[#2c3342] max-[660px]:shadow-md sm:max-w-full">
        <h2 className="my-6 text-7xl font-extrabold max-[1000px]:text-5xl max-[660px]:text-center max-[420px]:text-4xl">
          المحتوى
        </h2>
      </div>
      <Content sections={course.section} paid={paid_course} />
    </section>
  );
};

export default CourseBody;
