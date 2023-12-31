"use client";
import prisma from "@/src/lib/PrismaClient";
import React, { useState } from "react";
import { CourseFormSchemaType } from "./types/formsTypes";
import { FormProps } from "./Exports";

const CourseForm = (
  entity: any,
  { Schema }: FormProps<CourseFormSchemaType>,
) => {
  const [formData, setFormData] = useState({
    courseId: entity.id,
    name: entity.name,
    des: entity.des,
    price: entity.price,
    thumbnail: entity.thumbnail,
  });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await prisma.course.update({
        where: {
          id: entity.id,
        },
        data: {
          name: formData.name,
          des: formData.des,
          price: parseFloat(formData.price),
          thumbnail: formData.thumbnail,
        },
      });

      console.log("Course updated successfully!");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, defaultValue } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: defaultValue,
    }));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* =========================== */}
        <label>
          <h3>اسم الكورس:</h3>
          <input
            className="text-black"
            type="text"
            name="name"
            value={entity.name}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label>
          <h3>الوصف: </h3>
          <input
            type="text"
            name="des"
            defaultValue={entity.des}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label>
          <h3>السعر:</h3>
          <input
            type="text"
            name="price"
            defaultValue={entity.price}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label>
          <h3>الصورة:</h3>
          <input
            type="text"
            name="thumbnail"
            defaultValue={entity.thumbnail}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <button type="submit">تعديل</button>
      </form>
    </div>
  );
};

export default CourseForm;
