"use client";
import axios from "axios";
import React, { useState } from "react";
import { CourseFormSchemaType } from "./types/formsTypes";
import { CourseType } from "@/src/types/global";
import toast from "react-hot-toast";

interface CourseFormProps {
  entity: CourseType;
  Schema: CourseFormSchemaType;
}

const CourseForm = ({ entity, Schema }: CourseFormProps) => {
  const [formData, setFormData] = useState(entity);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedCourse = await axios.post(`/api/admin/update/`, formData);
      setFormData(UpdatedCourse.data);
      toast.success(`Course updated successfully `);
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
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* =========================== */}
        <label>
          <h3>اسم الكورس:</h3>
          <input
            className="text-black"
            required
            type="text"
            name="name"
            defaultValue={entity.name}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label>
          <h3>الوصف: </h3>
          <input
            className="text-black"
            required
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
            className="text-black"
            type="text"
            required
            name="price"
            defaultValue={entity.price}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label>
          <h3>الصورة:</h3>
          <input
            className="text-black"
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
