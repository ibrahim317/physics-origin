"use client";
import React from "react";
import payment from "@/src/lib/paymob";
import { LectureType, UserType } from "@/src/types/global";

interface props {
  user: UserType | null;
  lecture: LectureType;
}

const PayButton: React.FC<props> = ({ user, lecture }) => {
  return (
    <button
      onClick={async () => {
        await payment(lecture, user);
      }}
      className=" mx-4 min-w-max self-center rounded-[25px] bg-[#F9C500] px-4 py-2 text-lg text-black transition duration-300 ease-in-out hover:bg-[#ffffff] max-md:self-start"
    >
      اشترك
    </button>
  );
};

export default PayButton;
