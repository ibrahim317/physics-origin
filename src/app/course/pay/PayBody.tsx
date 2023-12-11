import React from "react";
import PayButton from "./PayButton";
const PayBody = ({
  price,
  needed_course,
  user,
}: {
  price: number;
  needed_course: any;
  user: any;
}) => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex  justify-center rtl text-black items-center ">
      <div className="max-w-[65vw] text-4xl gap-7 max-md:text-xl max-[400px]:text-base justify-between text-white bg-[#2c3342] max-md:min-w-[80vw] flex flex-col m-2 flex-grow rounded-2xl p-10">
        {price > 0 ? (
          <>
            <div className="flex flex-col gap-10">
              <div className="grid gap-5 ">
                <div> اسم الكورس </div>
                <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                  {needed_course?.name}
                </div>
              </div>
              <div className="grid gap-5 ">
                محتوى الكورس
                <div className="text-start text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                  {needed_course?.des[0]}
                </div>
              </div>
              <div className="grid  gap-5 ">
                سعر الكورس
                <div className="text-start md:inline text-2xl max-md:text-lg max-[400px]:text-sm text-[#F9c500]  ">
                  {needed_course?.price} جنية
                </div>
              </div>
            </div>
            <PayButton user={user} course={needed_course} price={price} />
          </>
        ) : (
          <>
            <div>
              <span className=" text-[#F9c500]">هذا الكورس مجاني</span>
            </div>
            <PayButton user={user} course={needed_course} price={price} />
          </>
        )}
      </div>
    </div>
  );
};

export default PayBody;
