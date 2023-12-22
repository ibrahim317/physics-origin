import React from "react";
import CourseCard from "./cards/CourseCard";
import LectureCard from "./cards/LectureCard";
import SectionCard from "./cards/SectionCard";
import { CourseType, SectionType } from "../types/global";

interface props {
  content: CourseType | SectionType;
  type: string;
  paid?: boolean;
  failed_last_test?: boolean;
}

const Card = ({ content, type, failed_last_test, paid }: props) => {
  switch (type) {
    case "course":
      return <CourseCard course={content as CourseType} />;
    case "section":
      return (
        <SectionCard
          paid={paid}
          failed_last_test={failed_last_test}
          section={content as SectionType}
        />
      );
    case "lecture":
      return (
        <LectureCard
          paid={paid}
          failed_last_test={failed_last_test}
          lecture={content as SectionType}
        />
      );
    default:
      break;
  }
};

export default Card;
