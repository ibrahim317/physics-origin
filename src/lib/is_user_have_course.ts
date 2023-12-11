import axios from "axios";
import get_user_by_email from "./get_user_by_email";
import { getServerSession } from "next-auth";

const is_user_have_course = async (course: any) => {
  const session = await getServerSession();
  let opened = false;
  if (session) {
    const user = await get_user_by_email(session?.user?.email);
    const len = user?.courses.length ? user.courses.length : 0;
    if (len > 0) {
      user?.courses.forEach((id: any) => {
        if (id == course.id) {
          opened = true;
        }
      });
    }
  }
  return opened;
};
export default is_user_have_course;
