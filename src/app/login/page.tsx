import React from "react";
import "@/src/styles/register.css";
import { Metadata } from "next";
import CreateForm from "./CreateForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};

const session = await getServerSession();
const page = async () => {

  if (session) {
    redirect("/profile");
  }

  return (
    <div
      className="halfPageSection min-h-screen w-screen  flex flex-col lg:flex-row lg:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
      <div className="w-3/5 h-3/5 my-auto mx-auto flex justify-center lg:px-10 flex-col  space-y-12">
        <div className="text-xl font-w-bold relative">
          <div className="flex flex-wrap lg:space-x-reverse  space-x-2">
            <span className="text-[#F9C500] text-5xl">تسجيل </span>
            <span className="text-5xl">الدخول</span>
          </div>
        </div>
        <div className="text-2xl opacity-70">
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
  );
};

export default page;
