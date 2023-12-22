import React from "react";
import Card from "@/src/components/Card";
import { SectionType, UserType } from "@/src/types/global";
import { getServerSession } from "next-auth";
import { get_user_with_progress } from "@/src/lib/get_user";
interface props {
  sections: SectionType[];
  paid: boolean;
}
const Content: React.FC<props> = async ({ sections, paid }) => {
  let failed_last_test = true;
  let user: UserType | null;
  const session = await getServerSession();
  if (session) {
    user = await get_user_with_progress(session.user?.email);
  }
  if (sections.length > 0) {
    return (
      <section
        className="bg-[#1c232d] max-md:bg-[#2c3342] p-3 flex flex-col  "
        id="Content"
      >
        <div className="grid gap-6  p-6 grid-cols-3 max-xl:flex max-xl:flex-col ">
          {sections.map((section: SectionType) => {
            if (user && user.progress?.passed_tests.includes(section.id)) {
              failed_last_test = false;
            }
            return (
              <Card
                type="section"
                paid={paid}
                content={section}
                key={section.id}
                failed_last_test={failed_last_test}
              />
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-[#1c232d] p-3 flex flex-col" id="Content">
        <div className="flex bg-[#1c232d] max-lg:justify-center "></div>
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          <h2 className="font-extrabold my-6 max-sm:text-center text-3xl  max-[420px]:text-4xl">
            لا توجد كورسات حالياً....ترقب نزولها قريباً
          </h2>
        </div>
      </section>
    );
  }
};

export default Content;
