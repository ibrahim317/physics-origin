import React from "react";
import Image from "next/image";
import get_all_courses from "@/src/lib/get_all_courses";
import Devider from "@/src/components/Devider";
import NotFound from "@/src/app/not-found";
import Sections from "@/src/components/Content_list";
import Link from "next/link";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const courses = await get_all_courses();
  const course = courses.filter(
    (course: any) => course.id == searchParams.id
  )[0];

  if (course) {
    return (
      <section className="flex flex-col gap-11 p-8  rtl">
        <div className="my-6 flex gap-6 justify-between max-h-fit max-sm:flex-col-reverse w-full ">
          <div className="max-sm:shadow-md rounded-xl max-sm:hover:scale-105 duration-200 p-5 max-sm:bg-[#2c3342] sm:max-w-[50vw] max-sm:max-w-none">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-extrabold my-6  max-md:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
                  {course.name}
                </h2>
                <div className="text-xl max-sm:text-center opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, ipsum tenetur. Quam quae beatae aliquam eligendi itaque
                  voluptatibus, sit, hic blanditiis suscipit, quia ipsum
                  pariatur voluptatem alias deserunt ab ut!
                </div>
              </div>
              <div className="flex justify-center gap-7">
                <Link
                  href={{
                    pathname: "/course/pay",
                    query: { id: course.id },
                  }}
                  className="flex border-[3px] border-[#F9C500] px-10 max-sm:px-5 py-4 mx-4 min-w-max text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-xl"
                >
                  اشترك الان
                </Link>
              </div>
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
        </div>
        <Sections id={course.id} /> {/* بيعرض كل الدروس */}
      </section>
    );
  } else {
    return <NotFound />;
  }
};
export default page;
