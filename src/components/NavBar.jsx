'use client';
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";


const NavBar = async () => {

  const session = await getServerSession()

  if (session) {
    return (
      <nav className="fixed flex items-center justify-around w-full h-28 px-20">
      <div className="container flex w-fit justify-around mx-10 drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20 py-4">
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
    <nav className="fixed flex items-center justify-around w-full h-28 px-20">
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
