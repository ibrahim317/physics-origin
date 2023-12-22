import React from "react";
import Card from "../Card";
import get_all_lectures from "../../lib/get_all_lectures";
import { get_user_by_email } from "../../lib/get_user";
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
        className=" bg-[#1c232d] p-3 flex flex-col rtl "
        id="lecturesSection"
      >
        <div className="flex bg-[#1c232d] max-lg:justify-center ">
          <h2 className="text-7xl text-white p-10  ">المحاضرات</h2>
        </div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
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
      <section className="bg-[#1c232d] p-3 rtl flex flex-col" id="Content">
        <h2 className="font-extrabold my-6 max-sm:text-center text-3xl  max-[420px]:text-4xl">
          لا توجد محاضرات حالياً....ترقب نزولها قريباً
        </h2>
      </section>
    );
  }
};

export default LecturesSection;
