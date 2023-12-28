import get_all_courses from "@/src/lib/db/get/get_all_courses";
import get_all_lectures from "@/src/lib/db/get/get_all_lectures";
import get_all_users from "@/src/lib/db/get/get_all_users";
import { CourseTable, LectureTable, UserTable } from "./columns";
import { CourseType, LectureType, UserType } from "@/src/types/global";

enum dataEnum {
  courses = "courses",
  lectures = "lectures",
  users = "users",
}

const coursesList = (AllCourses: CourseType[]): CourseTable[] => {
  return AllCourses.map((course: CourseType) => {
    return {
      id: course.id,
      name: course.name,
      price: course.price,
      NumberOfSections: course.section.length,
    };
  });
};
const lecturesList = (AllLecture: LectureType[]): LectureTable[] => {
  return AllLecture.map((lecture: LectureType) => {
    return {
      id: lecture.id,
      name: lecture.name,
      price: lecture.price ?? 0,
      tag: lecture.tag,
    };
  });
};
const usersList = (User: UserType[]): UserTable[] => {
  return User.map((user: UserType) => {
    return {
      id: user.id,
      name: user.first_name + " " + user.last_name,
      phone: user.phone,
      parent_phone: user.parent_phone,
      email: user.email,
    };
  });
};

export const fetch_data = async (data_type: string) => {
  switch (data_type) {
    case dataEnum.courses:
      return coursesList(await get_all_courses());
    case dataEnum.lectures:
      return lecturesList(await get_all_lectures());
    case dataEnum.users:
      return usersList(await get_all_users());
    default:
      return null;
  }
};
