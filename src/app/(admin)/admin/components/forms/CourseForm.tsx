"use client";
import axios from "axios";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { CourseType } from "@/src/types/global";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Content from "./ConentSection";
import Alert from "@/src/components/Alert";
interface CourseFormProps {
  entity?: CourseType;
}
enum bool {
  False = "false",
  True = "true",
}

const CourseForm = ({ entity }: CourseFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState(
    entity ?? {
      published: false,
    },
  );

  const CreateCourse = async (e: any) => {
    e.preventDefault();
    try {
      const createdCourse = await axios.post(
        "/api/admin/create/course",
        formData,
      );
      toast.success(`تم التعديل بنجاح`);
      setTimeout(() => {
        router.back();
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateCourse = async (e: any) => {
    e.preventDefault();

    try {
      const UpdatedCourse = await axios.post(
        `/api/admin/update/course/`,
        formData,
      );
      setFormData(UpdatedCourse.data);
      console.log("Course updated successfully!");
      toast.success(`تم التعديل بنجاح`);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleFormSubmit = !entity ? CreateCourse : UpdateCourse;
  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    if (value == "true") value = true;
    else if (value == "false") value = false;
    else if (name === "price") value = Number(value);
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleDelete = async (e: any) => {
    try {
      await axios.post("/api/admin/delete/", {
        id: entity?.id,
        entity: "course",
      });
    } catch (error) {
      console.error("Error deleting video", error);
    }
  };
  return (
    <div className="my-28 h-screen w-full ">
      <form
        onSubmit={handleFormSubmit}
        className="container flex w-full flex-col items-center justify-center"
      >
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">الاسم:</h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-2 text-2xl text-white sm:px-16 sm:py-10"
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
            className="rounded-md border-2 bg-transparent px-2 py-2 text-2xl text-white sm:px-16 sm:py-10"
            required
            type="text"
            name="des"
            defaultValue={entity?.des ?? ""}
            onChange={handleInputChange}
          />
        </label>
        {/* =========================== */}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">السعر:</h3>
          <input
            className="rounded-md border-2 bg-transparent px-2 py-2 text-2xl text-white  sm:px-16 sm:py-10"
            type="numebr"
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
            className="rounded-md border-2 bg-transparent px-2 py-2 text-2xl text-white  sm:px-16 sm:py-10"
            type="text"
            required
            name="thumbnail"
            defaultValue={entity?.thumbnail}
            onChange={handleInputChange}
          />
        </label>{" "}
        <label className="flex flex-col items-center">
          <h3 className="m-10 w-full p-2 text-2xl opacity-70">نشر الكورس </h3>
          <select
            className="rounded-md border-2 bg-transparent px-2 py-2 text-2xl text-white sm:px-16 sm:py-10"
            required
            name="published"
            defaultValue={String(entity?.published)}
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
      <div className="m-20 flex flex-col gap-28">
        <Content sections={entity?.section} />
        <Link
          href={{
            pathname: "../create/section",
            query: { courseid: entity?.id },
          }}
        >
          <Button variant="green">Create New Section</Button>
        </Link>
      </div>
    </div>
  );
};

export default CourseForm;
