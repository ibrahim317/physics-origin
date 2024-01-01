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
          className="fixed z-20 flex w-full flex-col justify-around  bg-[#1b2029] "
        >
          <div className="flex h-24 w-full items-center justify-around py-4  shadow-lg drop-shadow-md  max-sm:justify-between">
            <Link href="/" className="flex">
              <h1 className="mx-5 my-auto text-xl">
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
                className="mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-black transition duration-300 ease-in-out hover:bg-[#ffffff] max-sm:hidden max-sm:px-5"
              >
                الصفحة الشخصية
              </button>
              <button
                className="mx-6 duration-200 sm:hidden"
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
            <div className="flex flex-row-reverse items-center  justify-center bg-opacity-20 p-7 text-center shadow-lg drop-shadow-md duration-300 sm:hidden">
              <button
                onClick={() => router.push("/profile/me")}
                className="mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-black transition duration-300 ease-in-out hover:bg-[#ffffff]"
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
        className="fixed z-20 flex w-full flex-col justify-around  bg-[#1b2029] "
      >
        <div className="flex h-24 w-full items-center justify-around py-4 shadow-lg drop-shadow-md max-sm:justify-between">
          <Link href="/" className="flex">
            <h1 className="mx-5 my-auto text-xl">
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
              className="mx-4 min-w-max px-10 py-4 transition duration-300 ease-in-out hover:text-[#F9C500] max-sm:hidden max-sm:px-5"
            >
              سجل الدخول
            </Link>
            <Link
              href="/register"
              className="mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-black transition duration-300 ease-in-out hover:bg-[#ffffff] max-sm:hidden max-sm:px-5"
            >
              انشئ حسابك
            </Link>
            <button
              className="mx-6 duration-200 sm:hidden"
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
          <div className="flex flex-row-reverse items-center  justify-end bg-opacity-20 p-7 text-center shadow-lg drop-shadow-md  duration-300   sm:hidden">
            <Link
              onClick={() => setToggle(!toggled)}
              href="register"
              className="mx-4 w-[50%] min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-black transition duration-300 ease-in-out hover:bg-[#ffffff] max-sm:px-5"
            >
              انشئ حسابك
            </Link>
            <Link
              onClick={() => setToggle(!toggled)}
              href="/login"
              className="mx-4 w-[50%] min-w-max rounded-3xl border-[3px] border-white px-10 py-4 transition duration-300 ease-in-out hover:border-[#F9C500] hover:text-[#F9C500] max-sm:px-5"
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
