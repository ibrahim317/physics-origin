"use client";
import axios from "axios";
import React, { useState } from "react";
import { SectionType } from "@/src/types/global";
import { Tag } from "@/prisma/generated/client";
import toast from "react-hot-toast";

interface SectionFormProps {
  entity: SectionType;
}

const SectionForm = ({ entity }: SectionFormProps) => {
  const [formData, setFormData] = useState(entity);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedSection = await axios.post(
        `/api/admin/update_section/`,
        formData,
      );
      setFormData(UpdatedSection.data);
      console.log("Section updated successfully!");
      toast.success(`تم التعديل بنجاح`);
    } catch (error) {
      console.error("Error updating section:", error);
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
            defaultValue={entity.name}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}

        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الرابط: </h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            type="text"
            name="yourlink"
            defaultValue={entity.yourlink}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">نوع السيكشن: </h3>
          <select
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            name="tag"
            value={formData.tag}
            onChange={handleInputChange}
          >
            {Object.values(Tag).map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
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

export default SectionForm;
