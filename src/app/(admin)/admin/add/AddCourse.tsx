"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { adminaddcourse } from "@/src/lib/adminaddcourse";

const AddCourse = () => {
  const { register, handleSubmit } = useForm();
  const submit = async (data: any) => {
    try {
      await adminaddcourse(data);
    } catch {
      return;
    }
    toast.success("تم إضافة الكورس بنجاح");
  };
  return (
    <form onSubmit={handleSubmit((data: any) => submit(data))}>
      <div className="flex flex-col justify-center">
        <div className="flex items-center flex-col">
          <input
            placeholder="    اسم الكورس            "
            className="bg-white py-8 px-15 text-white text-2xl rounded-[25px] border-none text-right bg-opacity-5 md:px-20 my-5"
            type="text"
            required
            {...register("name")}
            defaultValue=""
          />
        </div>

        <div className="flex items-center flex-col">
          <input
            placeholder="    الوصف           "
            className="bg-white py-8 px-15 text-white text-2xl rounded-[25px] border-none text-right bg-opacity-5 md:px-20 my-5"
            type="text"
            required
            {...register("des")}
            defaultValue=""
          />
        </div>

        <div className="flex items-center flex-col">
          <input
            placeholder="    السعر           "
            className="bg-white py-8 px-15 text-white text-2xl rounded-[25px] border-none text-right bg-opacity-5 md:px-20 my-5"
            type="number"
            min={0}
            required
            {...register("price")}
            defaultValue=""
          />
        </div>

        <div className="flex items-center flex-col">
          <input
            placeholder="    لينك الصورة المصغرة          "
            className="bg-white py-8 px-15 text-white text-2xl rounded-[25px] border-none text-right bg-opacity-5 md:px-20 my-5"
            type="text"
            required
            {...register("thumbnail")}
            defaultValue=""
          />
        </div>

        <button
          type="submit"
          className="text-4xl bg-green-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
        >
          إضافة
        </button>
      </div>
    </form>
  );
};

export default AddCourse;
