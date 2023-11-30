import React from "react";
import "@/src/styles/register.css";
import { Metadata } from "next";
import CreateForm from "./CreateForm";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};

const page = async () => {

  return (
    <>
      <div className="halfPageSection min-h-[calc(100vh-6rem)] w-screen  flex flex-col lg:flex-row bg-cover bg-center">
        <div className="w-3/5 h-3/5 my-auto mx-auto flex justify-center lg:px-10 flex-col  space-y-12">
          <div className="text-xl font-w-bold relative">
            <div className="flex gap-2 lg:space-x-reverse  space-x-2">
              <span className="text-[#F9C500] text-3xl">تسجيل </span>
              <span className="text-3xl">الدخول</span>
            </div>
          </div>
          <div className="text-xl opacity-70">
            ادخل علي حسابك برقم الهاتف و كلمة المرور اللي مسجل بيهم قبل كده
          </div>
          <div className="">
            <CreateForm />
          </div>
          <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse clr-text-secondary font-normal space-x-2">
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
