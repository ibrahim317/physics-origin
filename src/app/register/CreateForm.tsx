"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { vaild } from "@/src/lib/vaild";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const submit = async (data: any) => {
    try {
      await vaild(data);
    } catch {
      return;
    }
    router.push("/login");
  };
  return (
    <form onSubmit={handleSubmit((data: any) => submit(data))}>
      <div className="space-y-6">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <div className="form-reg__group undefined false ">
                <input
                  className="smooth z-10"
                  type="text"
                  required
                  {...register("name")}
                  defaultValue=""
                />

                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] translate-y-px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--icon-park-solid"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                        >
                          <circle cx={24} cy={11} r={7} fill="currentColor" />
                          <path d="M4 41c0-8.837 8.059-16 18-16" />
                          <path
                            fill="currentColor"
                            d="m31 42l10-10l-4-4l-10 10v4h4Z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-[#fff] opacity-70">الاسم الأول</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-reg__group undefined false ">
                <input
                  className="smooth z-10"
                  type="text"
                  required
                  {...register("last_name")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--icon-park-solid"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                        >
                          <circle cx={24} cy={11} r={7} fill="currentColor" />
                          <path d="M4 41c0-8.837 8.059-16 18-16" />
                          <path
                            fill="currentColor"
                            d="m31 42l10-10l-4-4l-10 10v4h4Z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-[#fff] opacity-70">الاسم الأخير</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-reg__group undefined false ">
                <input
                  className="smooth z-10"
                  type="text"
                  required
                  {...register("phone")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
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
                    <span className="text-[#fff] opacity-70">رقم الهاتف</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-reg__group undefined false ">
                <input
                  className="smooth z-10"
                  type="text"
                  required
                  {...register("father_phone")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
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
                    <span className="text-[#fff] opacity-70">
                      رقم هاتف ولي الأمر
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="form-reg__group undefined false ">
                <input
                  className="smooth z-10"
                  type="text"
                  required
                  {...register("email")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--bx"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8v1c0 .692-.313 2-1.5 2c-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621c.524.89 1.408 1.621 2.838 1.621c2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>
                    </span>
                    <span className="text-[#fff] opacity-70">
                      البريد الإلكتروني
                    </span>
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
                  {...register("password")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
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
                    <span className="text-[#fff] opacity-70">كلمة السر</span>
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
                  {...register("repassword")}
                  defaultValue=""
                />
                <span className="bg" />
                <span className="highlight" />
                <span className="bar" />
                <label>
                  <div className="flex flex-wrap flex-row lg:space-x-reverse md:space-x-reverse sm:space-x-reverse space-x-reverse space-x-2">
                    <span className="flex-center-both trasnform text-[#f9c500] -translate-y-px">
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
                    <span className="text-[#fff] opacity-70">
                      تأكيد كلمة السر
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="text-[#fff] border-2 smooth false px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:bg-[#F9C500] hover:text-[#000] transition ease-in-out duration-300 border-[#F9C500] rounded-[25px] "
          >
            انشئ الحساب !
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
