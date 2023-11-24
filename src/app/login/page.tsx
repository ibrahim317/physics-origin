import React, { FormEventHandler, useState } from "react";
import "@/src/styles/register.css";
import { Metadata } from "next";
import { signIn } from "next-auth/react";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return (
    <div
      className="halfPageSection min-h-screen w-screen  flex flex-col lg:flex-row lg:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
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
          <form
            encType="multipart/form-data"
            // *****************signin******************************* //
            onSubmit={() => console.log("login")}
            // *****************signin******************************* //
          >
            <div className="space-y-6">
              <div>
                <div className="space-y-12">
                  <div className="">
                    <div className="form-reg__group undefined false ">
                      <input
                        className="smooth z-10"
                        type="text"
                        required
                        id="phone"
                        defaultValue=""
                      />
                      <span className="bg" />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>
                        <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                          <span className="flex-center-both trasnform text-[#F9C500] -translate-y-px">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--ant-design"
                              width="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553A395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4c7.3 0 14.3-.6 21.2-1.8c134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"
                              />
                            </svg>
                          </span>
                          <span className="font-semibold">رقم الهاتف</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="form-reg__group undefined false ">
                      <input
                        className="smooth z-10"
                        type="password"
                        required
                        id="password"
                        defaultValue=""
                      />
                      <span className="bg" />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>
                        <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                          <span className="flex-center-both trasnform text-[#F9C500]  -translate-y-px">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              className="iconify iconify--ri"
                              width="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1Zm-2 0V7a4 4 0 0 0-8 0v1h8Zm-5 6v2h2v-2h-2Zm-4 0v2h2v-2H7Zm8 0v2h2v-2h-2Z"
                              />
                            </svg>
                          </span>
                          <span className="font-semibold">كلمة السر</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button
                  className="text-[#fff] border-2 smooth false px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:bg-[#F9C500] hover:text-[#000] transition ease-in-out duration-300 border-[#F9C500] rounded-[25px]"
                  // *****************signin******************************* //
                  type="submit"
                  onClick={() => {
                    signIn();
                  }}
                  // *****************signin******************************* //
                >
                  تسجيل الدخول
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse clr-text-secondary font-normal space-x-2">
          <span className="text-[#ffffff8d]">معنكش حساب؟</span>
          <a href="/register">
            <span className="text-[#f9c500]">اعمل حسابك دلوقتي من هنا !</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
