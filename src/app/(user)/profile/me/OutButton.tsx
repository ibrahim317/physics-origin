"use client";
import React from "react";
import { signOut } from "next-auth/react";

const outButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-3xl bg-red-500 px-10 py-7 rounded-[25px] m-5 hover:opacity-70 transition ease-in-out"
    >
      تسجيل خروج
    </button>
  );
};

export default outButton;
