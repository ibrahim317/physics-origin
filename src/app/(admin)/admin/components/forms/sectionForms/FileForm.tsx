"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Tag } from "@/prisma/generated/client";
interface FileFormProps {
  courseID: string;
  entity?: any;
}

enum bool {
  True = "true",
  False = "false",
}

const FileForm = ({ entity, courseID }: FileFormProps) => {
  const [formData, setFormData] = useState(
    entity ?? { tag: Tag.FILE, courseID: Number(courseID) },
  );
  const router = useRouter();

  const CreateFile = async (e: any) => {
    e.preventDefault();
    try {
      const createdFile = await axios.post(
        "/api/admin/create/section",
        formData,
      );
      toast.success(`تم إنشاء الدرس بنجاح`);
      setTimeout(() => {
        router.back();
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateFile = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedFile = await axios.post(
        `/api/admin/update/section`,
        formData,
      );
      setFormData(UpdatedFile.data);
      console.log("File updated successfully!");
      toast.success(`تم التعديل بنجاح`);
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handleFormSubmit = !entity ? CreateFile : UpdateFile;
  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    if (value === "true") value = true;
    else if (value === "false") value = false;
    setFormData((prevData: any) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
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
            defaultValue={entity?.des ?? ""}
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الرابط: </h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            type="text"
            name="yourlink"
            defaultValue={entity?.yourlink ?? ""}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">نشر: </h3>
          <select
            className="rounded-md border-2 bg-transparent px-2 py-5 text-2xl text-white sm:px-16 sm:py-10"
            required
            name="published"
            defaultValue={entity?.tag}
            onChange={handleInputChange}
          >
            {Object.values(bool).map((op) => (
              <option key={op} value={op}>
                {op}
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

export default FileForm;
