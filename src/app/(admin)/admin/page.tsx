import { get_user_by_email } from "@/src/lib/db/get/get_by/get_user";
import { getServerSession } from "next-auth";
import React from "react";
import NotFound from "@/src/app/not-found";

const page = async () => {
  // Check if the user is logged in
  const session = await getServerSession();
  if (!session) return <NotFound />;
  // Check if the user is have access
  const user = await get_user_by_email(session.user?.email);
  if (user?.isAdmin === false) return <NotFound />;

  return (
    <div className="flex w-[99vw] items-center justify-center gap-28">
      <h1 className="rounded-md border-2 border-gray-300 p-10 text-center text-3xl font-medium">
        Admin
      </h1>
    </div>
  );
};

export default page;
