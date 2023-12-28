import React from "react";
import CourseCard from "./cards/CourseCard";
import LectureCard from "./cards/LectureCard";
import SectionCard from "./cards/SectionCard";
import { CourseType, LectureType, SectionType } from "../types/global";

interface props {
  content: CourseType | SectionType | LectureType;
  type: string;
  paid?: boolean;
  passed_last_quiz?: boolean;
}

const Card = ({ content, type, passed_last_quiz, paid }: props) => {
  switch (type) {
    case "course":
      return <CourseCard course={content as CourseType} />;
    case "section":
      return (
        <SectionCard
          paid={paid}
          passed_last_quiz={passed_last_quiz}
          section={content as SectionType}
        />
      );
    case "lecture":
      return <LectureCard paid={paid} lecture={content as LectureType} />;
    default:
      break;
  }
};

export default Card;
