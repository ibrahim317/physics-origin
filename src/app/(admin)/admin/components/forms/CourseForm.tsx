"use client";
import axios from "axios";
import React, { useState } from "react";
import { CourseFormSchemaType } from "./types/formsTypes";
import { CourseType } from "@/src/types/global";
import toast from "react-hot-toast";

interface CourseFormProps {
  entity: CourseType;
}

const CourseForm = ({ entity }: CourseFormProps) => {
  const [formData, setFormData] = useState(entity);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedCourse = await axios.post(
        `/api/admin/update_course/`,
        formData,
      );
      setFormData(UpdatedCourse.data);
      console.log("Course updated successfully!");
      toast.success(`تم التعديل بنجاح`);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-full">
      <form
        onSubmit={handleFormSubmit}
        className="container flex w-full flex-col items-center justify-center"
      >
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الاسم:</h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            type="text"
            name="name"
            defaultValue={entity?.name}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الوصف: </h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            type="text"
            name="des"
            defaultValue={entity?.des}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">السعر:</h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white  sm:px-16 sm:py-10"
            type="text"
            required
            name="price"
            defaultValue={entity?.price}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الصورة:</h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white  sm:px-16 sm:py-10"
            type="text"
            name="thumbnail"
            defaultValue={entity?.thumbnail}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <button
          type="submit"
          className="m-10 rounded-md bg-[#707070] bg-opacity-50 px-16 py-5 text-2xl hover:opacity-60"
        >
          تعديل
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
