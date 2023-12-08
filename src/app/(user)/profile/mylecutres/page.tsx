import Card from "@/src/components/Card";
import get_all_lectures from "@/src/lib/get_all_lectures";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";

const profile = async () => {
  const session = await getServerSession();
  const lectures = await get_all_lectures();
  const user = await get_user_by_email(session?.user?.email);

  if (lectures.length > 0) {
    const paidlecture = lectures.filter((lecture: any) =>
      user?.lectures.find((paidid: any) => paidid == lecture.id)
    );

    return (
      <section className=" p-3 flex flex-col rtl ">
        <div className="min-h-[50%] grid gap-6  p-6 grid-cols-3 max-[500px]:grid-cols-1 max-lg:grid-cols-2">
          {paidlecture.map((lecture: any) => (
            <Card type="lecture" content={lecture} key={lecture.id} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className="rtl w-full flex justify-center items-center">
        <h2 className="text-4xl p-10 font-bold">
          لم تشترك في أي كورسات حتي الان!
        </h2>
      </section>
    );
  }
};

export default profile;
