import React from "react";
import PayButton from "./PayButton";
import { LectureType, UserType } from "@/src/types/global";

interface props {
  lecture: LectureType;
  price: number;
  user: UserType | null;
}

const PayBody: React.FC<props> = ({ price, lecture, user }) => {
  return (
    <div className="rtl flex  min-h-[calc(100vh-6rem)] items-center justify-center text-black ">
      <div className="m-2 flex max-w-[65vw] flex-grow flex-col justify-between gap-7 rounded-2xl bg-[#2c3342] p-10 text-4xl text-white max-md:min-w-[80vw] max-md:text-xl max-[400px]:text-base">
        {price > 0 ? (
          <>
            <div className="flex flex-col gap-10">
              <div className="grid gap-5 ">
                <div> اسم محاضرة </div>
                <div className="text-start text-2xl text-[#F9c500] max-md:text-lg max-[400px]:text-sm  ">
                  {lecture?.name}
                </div>
              </div>
              <div className="grid gap-5 ">
                محتوى محاضرة
                <div className="text-start text-2xl text-[#F9c500] max-md:text-lg max-[400px]:text-sm  ">
                  {lecture?.des[0]}
                </div>
              </div>
              <div className="grid  gap-5 ">
                سعر المحاضرة
                <div className="text-start text-2xl text-[#F9c500] max-md:text-lg max-[400px]:text-sm md:inline  ">
                  {lecture?.price} جنية
                </div>
              </div>
            </div>
            <PayButton user={user} lecture={lecture} />
          </>
        ) : (
          <>
            <div>
              <span className=" text-[#F9c500]">هذه المحاضرة مجاني</span>
            </div>
            <PayButton user={user} lecture={lecture} />
          </>
        )}
      </div>
    </div>
  );
};

export default PayBody;
