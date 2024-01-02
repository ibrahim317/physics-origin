import { get_user_by_email } from "./db/get/get_by/get_user";
import { getServerSession } from "next-auth";

const dose_user_have_course = async (course: any): Promise<boolean> => {
  const session = await getServerSession();
  if (session) {
    console.log(course.price);
    if (course.price == 0) return true;
    const user = await get_user_by_email(session?.user?.email);
    const len = user?.courses.length ? user.courses.length : 0;
    if (len > 0) {
      const found = user?.courses.includes(course.id);
      if (found) {
        console.log("ALSO HERE");
        return true;
      }
    }
  }
  return false;
};
export default dose_user_have_course;
