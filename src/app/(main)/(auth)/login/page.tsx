import React from "react";
import "@/src/styles/register.css";
import { Metadata } from "next";
import CreateForm from "./components/CreateForm";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};

const page = async () => {
  return (
    <>
      <div className="halfPageSection flex min-h-[calc(100vh-6rem)]  w-screen flex-col bg-cover bg-center lg:flex-row">
        <div className="mx-auto my-auto flex h-3/5 w-3/5 flex-col justify-center space-y-12  lg:px-10">
          <div className="font-w-bold relative text-xl">
            <div className="flex gap-2 space-x-2  lg:space-x-reverse">
              <span className="text-3xl text-[#F9C500]">تسجيل </span>
              <span className="text-3xl">الدخول</span>
            </div>
          </div>
          <div className="text-xl opacity-70">
            ادخل علي حسابك برقم الهاتف و كلمة المرور اللي مسجل بيهم قبل كده
          </div>
          <div className="">
            <CreateForm />
          </div>
          <div className="clr-text-secondary flex flex-row flex-wrap space-x-2 space-x-reverse font-normal sm:space-x-reverse md:space-x-reverse lg:space-x-reverse">
            <span className="text-[#ffffff8d]">معندكش حساب؟</span>
            <a href="/register">
              <span className="text-[#f9c500]">اعمل حسابك دلوقتي من هنا !</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
