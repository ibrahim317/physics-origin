"use client";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Tag } from "@/prisma/generated/client";
import Alert from "@/src/components/Alert";

enum bool {
  True = "true",
  False = "false",
}
interface QuizFormProps {
  entity: any;
  courseID: number;
}
const QuizForm = ({ entity, courseID }: QuizFormProps) => {
  const [formData, setFormData] = useState(
    entity ?? { tag: Tag.QUIZ, courseID: Number(courseID) },
  );
  const router = useRouter();

  const CreateQuiz = async (e: any) => {
    e.preventDefault();
    try {
      const createdQuiz = await axios.post(
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

  const UpdateQuiz = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedQuiz = await axios.post(
        `/api/admin/update/section`,
        formData,
      );
      setFormData(UpdatedQuiz.data);
      console.log("Quiz updated successfully!");
      toast.success(`تم التعديل بنجاح`);
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handleFormSubmit = !entity ? CreateQuiz : UpdateQuiz;
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

  const handleDelete = async (e: any) => {
    try {
      await axios.post("/api/admin/delete/", {
        id: entity.id,
        entity: "section",
      });
    } catch (error) {
      console.error("Error deleting video", error);
    }
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

        <div>
          <button
            type="submit"
            className="m-10 rounded-md bg-[#707070] bg-opacity-50 px-16 py-5 text-2xl hover:opacity-60"
          >
            تعديل
          </button>
          {entity ? (
            <Alert
              heading="Delete this section"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              callback={handleDelete}
              actionText="Delete"
              delete
            />
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
