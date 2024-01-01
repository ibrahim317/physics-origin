"use client";
import React from "react";
import { signOut } from "next-auth/react";

const outButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="m-5 rounded-[25px] bg-red-500 px-10 py-7 text-3xl transition ease-in-out hover:opacity-70"
    >
      تسجيل خروج
    </button>
  );
};

export default outButton;
