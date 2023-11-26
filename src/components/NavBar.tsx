"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <nav className="fixed flex items-center z-50 justify-around w-full h-28 px-20">
        <div className="container flex w-fit justify-around mx-10 drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20 py-4">
          <button
            onClick={async () => await signOut()}
            className="px-10 max-sm:px-5 py-4 mx-4 min-w-max text-white bg-[#ff2323] rounded-[25px] hover:bg-[#ffffff] hover:text-black transition ease-in-out duration-300"
          >
            تسجيل الخروج
          </button>
          <Link
            href="/"
            className="px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:text-[#F9C500] transition ease-in-out duration-300"
          >
            الكورسات
          </Link>
          <Link
            href="/profile"
            className="px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:text-[#F9C500] transition ease-in-out duration-300"
          >
            الحساب الشخصي
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed flex items-center z-10 justify-around w-full h-28 px-20">
      <div className="container flex w-fit justify-around mx-10 drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20 py-4">
        <Link
          href="/login"
          className="px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:text-[#F9C500] transition ease-in-out duration-300"
        >
          سجل الدخول
        </Link>
        <Link
          href="/register"
          className="px-10 max-sm:px-5 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
        >
          !اشترك الان
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;