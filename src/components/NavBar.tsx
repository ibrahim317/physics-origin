"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session } = useSession();
  const [toggled, setToggle] = useState(false);
  const router = useRouter();

  if (session) {
    return (
      <>
        <nav
          style={{
            opacity: "1",
            transition: "opacity 0.5s",
            transitionDuration: "0.3s",
          }}
          className="fixed flex flex-col bg-[#1b2029] z-20 justify-around  w-full "
        >
          <div className="flex justify-around max-sm:justify-between items-center w-full h-24  drop-shadow-md shadow-lg  py-4">
            <Link href="/" className="flex">
              <h1 className="text-xl my-auto mx-5">
                <span className="text-[#F9C500]">الصفحة</span> الرئيسية
              </h1>
              <Image
                src={logo}
                alt="origin logo"
                className="max-sm:mx-6"
                width={50}
                height={50}
              />
            </Link>
            <div className="flex flex-row">
              <button
                onClick={() => router.push("/profile/me")}
                className="px-10 max-sm:px-5 max-sm:hidden py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
              >
                الصفحة الشخصية
              </button>
              <button
                className="sm:hidden mx-6 duration-200"
                onClick={() => setToggle(!toggled)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={40}
                  height={40}
                  viewBox="0 0 72 72"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
                </svg>
              </button>
            </div>
          </div>
          {toggled ? (
            <div className="sm:hidden drop-shadow-md shadow-lg  flex text-center items-center flex-row-reverse bg-opacity-20 p-7 justify-center duration-300">
              <button
                onClick={() => router.push("/profile/me")}
                className="px-10 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
              >
                الصفحة الشخصية
              </button>
            </div>
          ) : (
            <></>
          )}
        </nav>
        <div className="h-24"></div>
      </>
    );
  }

  return (
    <>
      <nav
        style={{
          opacity: "1",
          transition: "opacity 0.5s",
          transitionDuration: "0.3s",
        }}
        className="fixed flex flex-col bg-[#1b2029] z-20 justify-around  w-full "
      >
        <div className="flex justify-around max-sm:justify-between items-center w-full h-24 drop-shadow-md shadow-lg py-4">
          <Link href="/" className="flex">
            <h1 className="text-xl my-auto mx-5">
              <span className="text-[#F9C500]">الصفحة</span> الرئيسية
            </h1>
            <Image
              src={logo}
              alt="origin logo"
              className="max-sm:mx-6"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex flex-row">
            <Link
              href="/login"
              className="px-10 max-sm:px-5 max-sm:hidden py-4 mx-4 min-w-max hover:text-[#F9C500] transition ease-in-out duration-300"
            >
              سجل الدخول
            </Link>
            <Link
              href="/register"
              className="px-10 max-sm:px-5 max-sm:hidden py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
            >
              انشئ حسابك
            </Link>
            <button
              className="sm:hidden mx-6 duration-200"
              onClick={() => setToggle(!toggled)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={40}
                height={40}
                viewBox="0 0 72 72"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z" />
              </svg>
            </button>
          </div>
        </div>
        {toggled ? (
          <div className="sm:hidden drop-shadow-md shadow-lg  flex text-center items-center flex-row-reverse bg-opacity-20 p-7  justify-end   duration-300">
            <Link
              onClick={() => setToggle(!toggled)}
              href="register"
              className="w-[50%] px-10 max-sm:px-5 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
            >
              انشئ حسابك
            </Link>
            <Link
              onClick={() => setToggle(!toggled)}
              href="/login"
              className="border-white border-[3px] rounded-3xl w-[50%] px-10 max-sm:px-5 py-4 mx-4 min-w-max hover:text-[#F9C500] hover:border-[#F9C500] transition ease-in-out duration-300"
            >
              سجل الدخول
            </Link>
          </div>
        ) : (
          <></>
        )}
      </nav>
      <div className="h-24"></div> {/* reseves a space */}
    </>
  );
};

export default NavBar;
