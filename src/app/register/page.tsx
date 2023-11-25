import SideImage from "@/public/assets/logo.png";
import CreateForm from "./CreateForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import "@/src/styles/register.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "إنشاء حساب",
};
const page = () => {
  return (
    <>
      <Link href="/" className="text-xl absolute top-10 right-10 px-10 max-sm:px-[0.09vw] py-4 mx-4 min-w-max bg-[#F9C500] text-[#000] transition ease-in-out duration-300 hover:bg-[#fff] rounded-[25px]">رجوع</Link>
      <div
        className="w-full bg-cover"
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <div className="halfPageSection flex flex-col lg:flex-row lg:min-h-screen space-y-10 lg:space-y-0">
          <div className="lg:basis-2/5 min-w-0 flex justify-center items-center">
            <Image src={SideImage} width={300} height={300} alt="logo" />
          </div>
          <div className="lg:basis-3/5 flex-center-both pb-nav-margin">
            <div className="w-4/5 h-4/5 flex justify-center lg:px-10 flex-col space-y-6">
              <div className="font-h2 text-white font-w-bold relative">
                <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                  <span className="text-[#F9C500] text-5xl">مستني ايه..</span>
                  <span className="text-2xl my-10">
                    سجل اسمك في لائحة المتفوقين!!
                  </span>
                </div>
              </div>
              <div className="">
                <CreateForm />
              </div>
              <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse clr-text-secondary font-normal space-x-2">
                <span className="text-[#ffffff8d]">عندك حساب قبل كده؟</span>
                <a href="/login">
                  <span className="text-[#f9c500]">سجل الدخول من هنا !</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
