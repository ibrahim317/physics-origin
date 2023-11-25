import React from "react";
import "@/src/styles/register.css";
import { Metadata } from "next";
import CreateForm from "./CreateForm";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
};

const session = await getServerSession();

const page = () => {

  if (session) {
    redirect("/profile");
  }

  return (
    <>
      <Link href="/" className="text-xl absolute top-10 right-10 px-10 max-sm:px-[0.09vw] py-4 mx-4 min-w-max bg-[#F9C500] text-[#000] transition ease-in-out duration-300 hover:bg-[#fff] rounded-[25px]">رجوع</Link>
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
    </>
  );
};

export default page;
