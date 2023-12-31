import React from "react";
import Image from "next/image";
import get_course_by_id from "@/src/lib/get_course_by_id";
import Devider from "@/src/components/Devider";
import NotFound from "../not-found/not-found";
import Sections from "@/src/components/Content_list";
import Link from "next/link";
import { getServerSession } from "next-auth";
import get_user_by_email from "@/src/lib/get_user_by_email";

const is_user_have_course = async (course: any) => {
  const session = await getServerSession();
  let locked = true;
  if (session) {
    const user = await get_user_by_email(session?.user?.email);
    const len = user?.courses.length ? user.courses.length : 0;
    if (len > 0) {
      user?.courses.forEach((id: any) => {
        if (id == course.id) {
          locked = false;
        }
      });
    }
  }
  return locked;
};
// اشترك الان button
const mybtn = (course: any, locked: any) => {
  let mybutton;
  if (course.price == 0) {
    mybutton = (
      <div className="flex border-[3px] border-green-400 px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg">
        هذا الكورس مجاني
      </div>
    );
  } else if (locked) {
    mybutton = (
      <Link
        href={{
          pathname: "/course/pay",
          query: { id: course.id },
        }}
        className="flex border-[3px] border-[#F9C500] px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-lg"
      >
        اشترك الان
      </Link>
    );
  } else {
    mybutton = (
      <div className="flex border-[3px] border-green-400 px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg">
        انت مشترك
      </div>
    );
  }
  return mybutton;
};
const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { id: string };
}) => {
  const course = await get_course_by_id(Number(searchParams.id));
  if (course) {
    const locked = await is_user_have_course(course);
    const thum = course.thumbnail ? course.thumbnail : "";
    const mybutton = mybtn(course, locked);
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
                  {course.des.map((text: any) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center gap-7">{mybutton}</div>
            </div>
          </div>
          <div className="min-w-[50%] max-sm:min-w-[calc(330px*0.8)]   ">
            <Image
              src={thum}
              width={300}
              height={100}
              alt="courseImage"
              className="w-full min-h-[200px]  max-w-[900px] border-8 border-white border-solid border-opacity-5 rounded-[14px]"
            />
          </div>
        </div>
        <Devider /> {/*/===============================================/*/}
        <div className="max-[660px]:shadow-md rounded-xl p-5 max-[660px]:bg-[#2c3342] sm:max-w-full max-[660px]:max-w-none flex flex-col items-center">
          <h2 className="font-extrabold my-6 max-[660px]:text-center text-7xl max-[1000px]:text-5xl max-[420px]:text-4xl">
            المحتوى
          </h2>
        </div>
        <Sections sections={course.section} locked={locked} />
      </section>
    );
  } else {
    return <NotFound />;
  }
};
export default page;
