"use client";
import React from "react";
import { signOut } from "next-auth/react";

const outButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-xl flex border-[3px] rounded-3xl px-10 py-5 transition ease-in-out duration-300"
    >
      تسجيل خروج
    </button>
  );
};

export default outButton;
