import {
  get_all_courses,
  get_all_sections,
  get_all_lectures,
  get_all_users,
} from "@/src/lib/db/get/get_all";

import {
  CourseTable,
  SectionTable,
  LectureTable,
  UserTable,
} from "./types/Tables";

import {
  CourseType,
  SectionType,
  LectureType,
  UserType,
} from "@/src/types/global";

enum dataEnum {
  courses = "courses",
  lectures = "lectures",
  users = "users",
  sections = "sections",
}

const coursesList = (AllCourses: CourseType[]): CourseTable[] => {
  return AllCourses.map((course: CourseType) => {
    return {
      id: course.id,
      name: course.name,
      price: course.price,
      NumberOfSections: course.section.length,
      published: course.published,
    };
  });
};
const lecturesList = (AllLecture: LectureType[]): LectureTable[] => {
  return AllLecture.map((lecture: LectureType) => {
    return {
      id: lecture.id,
      name: lecture.name,
      price: lecture.price ?? 0,
      published: lecture.published,
    };
  });
};
const usersList = (User: UserType[]): UserTable[] => {
  return User.map((user: UserType) => {
    return {
      id: user.id,
      name: user.name + " " + user.last_name,
      phone: user.phone,
      parent_phone: user.parent_phone,
      email: user.email,
    };
  });
};
const sectionsList = (Section: SectionType[]): SectionTable[] => {
  return Section.map((section: SectionType) => {
    return {
      id: section.id,
      name: section.name,
      tag: section.tag,
      published: section.published,
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
    case dataEnum.sections:
      return sectionsList((await get_all_sections()) as SectionType[]);
    default:
      return null;
  }
};
