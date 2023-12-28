import React from "react";
import Card from "@/src/components/Card";
import { SectionType, UserType } from "@/src/types/global";
import { getServerSession } from "next-auth";
import { get_user_with_progress } from "@/src/lib/db/get/get_by/get_user";
interface props {
  sections: SectionType[];
  paid: boolean;
}
const Content: React.FC<props> = async ({ sections, paid }) => {
  let passed_last_quiz = true;
  let user: UserType | null;
  const session = await getServerSession();
  if (session) {
    user = await get_user_with_progress(session.user?.email);
  }
  if (sections.length > 0) {
    return (
      <section
        className="flex flex-col bg-[#1c232d] p-3 max-md:bg-[#2c3342]  "
        id="Content"
      >
        <div className="grid grid-cols-3  gap-6 p-6 max-xl:flex max-xl:flex-col ">
          {sections.map((section: SectionType) => {
            let return_value = (
              <Card
                type="section"
                paid={paid}
                content={section}
                key={section.id}
                passed_last_quiz={passed_last_quiz}
              />
            );
            if (
              section.tag == "QUIZ" &&
              user &&
              !user.progress?.passed_quizzes.includes(section.id)
            ) {
              passed_last_quiz = false;
            }
            return return_value;
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col bg-[#1c232d] p-3" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="grid min-h-[50%] grid-cols-3  gap-6 p-6 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
          <h2 className="my-6 text-3xl font-extrabold max-sm:text-center  max-[420px]:text-4xl">
            لا توجد كورسات حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default Content;
