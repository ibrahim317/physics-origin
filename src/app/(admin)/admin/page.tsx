"use client";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import Link from "next/link";

const page = async () => {
  const session = await getServerSession();
  if (!session) redirect("/login");

  if (session) {
    const user = await get_user_by_email(session.user?.email);
    if (user?.isAdmin === false) redirect("/");
    else {
      return (
        <section className="w-full h-screen">
          <div className="w-full h-full flex flex-col justify-center items-center -my-24">
            <Link
              href={"/admin/add"}
              className="text-4xl bg-green-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
            >
              إضافة كورس
            </Link>
            <Link
              href={""}
              className="text-4xl bg-orange-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
            >
              تعديل كورس
            </Link>
            {/* <Link
              href={""}
              className="text-4xl bg-blue-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
            >
              المستخدمين
            </Link> */}
          </div>
        </section>
      );
    }
  }
};

export default page;
