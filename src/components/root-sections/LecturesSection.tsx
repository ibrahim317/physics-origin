import React from "react";
import Card from "../Card";
import get_all_lectures from "../../lib/db/get/get_all_lectures";
import { get_user_by_email } from "../../lib/db/get/get_user";
import { getServerSession } from "next-auth";

const LecturesSection = async () => {
  const lectures = await get_all_lectures();
  let paid_lectures: number[] = [];

  if (lectures.length > 0) {
    const session = await getServerSession();
    if (session) {
      const user = await get_user_by_email(session?.user?.email);
      paid_lectures = user?.lectures ?? [];
    }
    return (
      <section
        className=" rtl flex flex-col bg-[#1c232d] p-3 "
        id="lecturesSection"
      >
        <div className="flex bg-[#1c232d] max-lg:justify-center ">
          <h2 className="p-10 text-7xl text-white  ">المحاضرات</h2>
        </div>
        <div className="grid min-h-[50%] grid-cols-3  gap-6 p-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {lectures.map((lecture: any) => {
            const paid = paid_lectures.includes(lecture.id);
            return (
              <Card
                type="lecture"
                content={lecture}
                paid={paid}
                key={lecture.id}
              />
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className="rtl flex flex-col bg-[#1c232d] p-3" id="Content">
        <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
          لا توجد محاضرات حالياً....ترقب نزولها قريباً
        </h2>
      </section>
    );
  }
};

export default LecturesSection;
