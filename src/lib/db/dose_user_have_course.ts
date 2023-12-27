import { get_user_by_email } from "./get_user";
import { getServerSession } from "next-auth";

const dose_user_have_course = async (course: any): Promise<boolean> => {
  if (course.price == 0) return true;
  const session = await getServerSession();
  if (session) {
    const user = await get_user_by_email(session?.user?.email);
    const len = user?.courses.length ? user.courses.length : 0;
    if (len > 0) {
      const found = user?.courses.map((id: any) => {
        if (id == course.id) {
          return true;
        }
      });
      if (found) return true;
    }
  }
  return false;
};
export default dose_user_have_course;
