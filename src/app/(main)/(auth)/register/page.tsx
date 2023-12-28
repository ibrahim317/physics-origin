import SideImage from "@/public/assets/logo.png";
import CreateForm from "./components/CreateForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import "@/src/styles/register.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "إنشاء حساب",
};
const page = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/profile/me");
  }

  return (
    <div className="bg-[#232935]">
      <div className="halfPageSection flex min-h-[calc(100vh-6rem)] flex-col p-14 lg:flex-row  ">
        <div className="flex min-w-0 items-center justify-center lg:basis-2/5">
          <Image
            src={SideImage}
            width={300}
            className=" max-md:hidden"
            height={300}
            alt="logo"
          />
        </div>
        <div className="flex-center-both pb-nav-margin lg:basis-3/5">
          <div className="flex h-4/5 w-4/5 flex-col justify-center space-y-6 lg:px-10">
            <div className="font-h2 font-w-bold relative text-white">
              <div className="flex flex-row flex-wrap space-x-2 space-x-reverse sm:space-x-reverse md:space-x-reverse lg:space-x-reverse">
                <span className="text-5xl text-[#F9C500]">مستني ايه..</span>
                <span className="my-10 text-2xl">
                  سجل اسمك في لائحة المتفوقين!!
                </span>
              </div>
            </div>
            <div className="">
              <CreateForm />
            </div>
            <div className="clr-text-secondary flex flex-row flex-wrap space-x-2 space-x-reverse font-normal sm:space-x-reverse md:space-x-reverse lg:space-x-reverse">
              <span className="text-[#ffffff8d]">عندك حساب قبل كده؟</span>
              <a href="/login">
                <span className="text-[#f9c500]">سجل الدخول من هنا !</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
