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
    <section className="flex flex-col gap-11 p-8  rtl">
      <div className="my-6 flex gap-6 justify-between max-h-fit max-[660px]:flex-col-reverse w-full ">
        <div className="max-[660px]:shadow-md rounded-xl  max-[660px]:hover:scale-105 duration-200 p-5 max-[660px]:bg-[#2c3342] [660px]:max-w-[50vw] max-[660px]:max-w-none">
          <div className="flex flex-col h-full gap-10 justify-between">
            <div>
              <h2 className="font-extrabold my-6  max-md:text-center text-7xl max-[1000px]:text-5xl max-[760px]:text-4xl">
                {course.name}
              </h2>
              <ul className="font-light m-3 opacity-70 text-lg ">
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
            className="w-full min-h-[200px]  max-w-[900px] border-8 border-white border-solid border-opacity-5 rounded-[14px]"
          />
        </div>
      </div>
      <Devider />
      <div className="max-[660px]:shadow-md rounded-xl p-5 max-[660px]:bg-[#2c3342] sm:max-w-full max-[660px]:max-w-none flex flex-col items-center">
        <h2 className="font-extrabold my-6 max-[660px]:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
          المحتوى
        </h2>
      </div>
      <Content sections={course.section} paid={paid_course} />
    </section>
  );
};

export default CourseBody;
