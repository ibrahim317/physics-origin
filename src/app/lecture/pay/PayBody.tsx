import React from "react";
import PayButton from "./PayButton";
import { SectionType, UserType } from "@/src/types/global";

interface props {
  lecture: SectionType;
  price: number;
  user: UserType | null;
}

const PayBody: React.FC<props> = ({ price, lecture, user }) => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex  justify-center rtl text-black items-center ">
      <div className="max-w-[65vw] text-4xl gap-7 max-md:text-xl max-[400px]:text-base justify-between text-white bg-[#2c3342] max-md:min-w-[80vw] flex flex-col m-2 flex-grow rounded-2xl p-10">
        {price > 0 ? (
          <>
            <div className="flex flex-col gap-10">
              <div className="grid gap-5 ">
                <div> اسم محاضرة </div>
                <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                  {lecture?.name}
                </div>
              </div>
              <div className="grid gap-5 ">
                محتوى محاضرة
                <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                  {lecture?.des[0]}
                </div>
              </div>
              <div className="grid  gap-5 ">
                سعر المحاضرة
                <div className="text-start md:inline text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
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
