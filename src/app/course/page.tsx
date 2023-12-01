import React from "react";
import Image from "next/image";
import get_all_courses from "@/src/lib/get_all_courses";
import Devider from "@/src/components/Devider";
import NotFound from "../not-found/not-found";
import Sections from "@/src/components/Content_list";
import Link from "next/link";
import { getServerSession } from "next-auth";
import get_user_by_email from "@/src/lib/get_user_by_email";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const session = await getServerSession();
  const courses = await get_all_courses();
  const course = courses.filter(
    (course: any) => course.id == searchParams.id
  )[0];
  const thum = course.thumbnail ? course.thumbnail : "";
  if (course) {
    if (session) {
      const user = await get_user_by_email(session.user?.email);
      let locked = true;
      const len = user?.courses.length ? user.courses.length : 0;
      if (len > 0) {
        user?.courses.forEach((id: any) => {
          if (id == course.id) {
            locked = false;
          }
        });
      }

      return (
        <section className="flex flex-col gap-11 p-8  rtl">
          <div className="my-6 flex gap-6 justify-between max-h-fit max-[660px]:flex-col-reverse w-full ">
            <div className="max-[660px]:shadow-md rounded-xl  max-[660px]:hover:scale-105 duration-200 p-5 max-[660px]:bg-[#2c3342] [660px]:max-w-[50vw] max-[660px]:max-w-none">
              <div className="flex flex-col h-full gap-10 justify-between">
                <div>
                  <h2 className="font-extrabold my-6  max-md:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
                    {course.name}
                  </h2>
                  <div className="text-xl max-[660px]:text-center opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ipsum tenetur. Quam quae beatae aliquam eligendi
                    itaque voluptatibus, sit, hic blanditiis suscipit, quia
                    ipsum pariatur voluptatem alias deserunt ab ut!
                  </div>
                </div>
                <div className="flex justify-center gap-7">
                  <Link
                    href={{
                      pathname: "/course/pay",
                      query: { id: course.id },
                    }}
                    className="flex border-[3px] border-[#F9C500] px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-lg"
                  >
                    اشترك الان
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[45vw] max-h-[40%] max-md:w-full">
              <Image
                src={thum}
                width={300}
                height={100}
                alt="courceImage"
                className="w-full border-8 border-white border-solid border-opacity-5 max-h-[50vh] rounded-[14px]"
              />
            </div>
          </div>
          <Devider /> {/*/===============================================/*/}
          <div className="max-[660px]:shadow-md rounded-xl p-5 max-[660px]:bg-[#2c3342] sm:max-w-full max-[660px]:max-w-none flex flex-col items-center">
            <h2 className="font-extrabold my-6 max-[660px]:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
              المحتوى
            </h2>
          </div>
          <Sections id={course.id} locked={locked} />
        </section>
      );
    } else {
      return (
        <section className="flex flex-col gap-11 p-8  rtl">
          <div className="my-6 flex gap-6 justify-between max-h-fit max-[660px]:flex-col-reverse w-full ">
            <div className="max-[660px]:shadow-md rounded-xl  max-[660px]:hover:scale-105 duration-200 p-5 max-[660px]:bg-[#2c3342] [660px]:max-w-[50vw] max-[660px]:max-w-none">
              <div className="flex flex-col h-full gap-10 justify-between">
                <div>
                  <h2 className="font-extrabold my-6  max-md:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
                    {course.name}
                  </h2>
                  <div className="text-xl max-[660px]:text-center opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ipsum tenetur. Quam quae beatae aliquam eligendi
                    itaque voluptatibus, sit, hic blanditiis suscipit, quia
                    ipsum pariatur voluptatem alias deserunt ab ut!
                  </div>
                </div>
                <div className="flex justify-center gap-7">
                  <Link
                    href={{
                      pathname: "/course/pay",
                      query: { id: course.id },
                    }}
                    className="flex border-[3px] border-[#F9C500] px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-lg"
                  >
                    اشترك الان
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[45vw] max-h-[40%] max-md:w-full">
              <Image
                src={thum}
                width={300}
                height={100}
                alt="courceImage"
                className="w-full border-8 border-white border-solid border-opacity-5 max-h-[50vh] rounded-[14px]"
              />
            </div>
          </div>
          <Devider /> {/*/===============================================/*/}
          <div className="max-[660px]:shadow-md rounded-xl p-5 max-[660px]:bg-[#2c3342] sm:max-w-full max-[660px]:max-w-none flex flex-col items-center">
            <h2 className="font-extrabold my-6 max-[660px]:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
              المحتوى
            </h2>
          </div>
          <Sections id={course.id} locked={true} />
        </section>
      );
    }
  } else {
    return <NotFound />;
  }
};
export default page;
