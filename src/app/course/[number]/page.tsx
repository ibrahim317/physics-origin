import React from "react";
import Image from "next/image";
import courseList from "@/src/lib/courseList";
import Devider from "@/src/components/Devider";
import NotFound from "../../not-found";
import YouTubeEmbed from "@/src/components/YouTubeEmbed";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const courses = await courseList();
  const c_id = searchParams.id;
  const course = courses.filter((course: any) => course.id == c_id)[0];

  if (course) {
    return (
      <section className="flex flex-col gap-11 p-8  rtl">
        <div className="my-6 flex gap-6 justify-between max-h-fit max-sm:flex-col-reverse w-full ">
          <div className="max-sm:shadow-md rounded-xl max-sm:hover:scale-105 duration-200 p-5 max-sm:bg-[#2c3342] sm:max-w-[50vw] max-sm:max-w-none">
            <h2 className="font-extrabold my-6  max-md:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
              {course.name}
            </h2>
            <div className="text-xl max-sm:text-center opacity-70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              ipsum tenetur. Quam quae beatae aliquam eligendi itaque
              voluptatibus, sit, hic blanditiis suscipit, quia ipsum pariatur
              voluptatem alias deserunt ab ut!
            </div>
          </div>
          <div className="w-[45vw] max-h-[40%] max-md:w-full">
            <Image
              src={course.thumbnail}
              width={300}
              height={100}
              alt="courceImage"
              className="w-full border-8 border-white border-solid border-opacity-5 max-h-[50vh] rounded-[14px]"
            /> 
          </div>
        </div>

        <Devider /> {/*/===============================================/*/}
        
        <div className="max-sm:shadow-md rounded-xl p-5 max-sm:bg-[#2c3342] sm:max-w-full max-sm:max-w-none flex flex-col items-center">
          <h2 className="font-extrabold my-6 max-sm:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
            المحتوى
          </h2>

          <YouTubeEmbed vidlink={course.vidlink} />

        </div>
      </section>
    );
  } else {
    return <NotFound />;
  }
};
export default page;
