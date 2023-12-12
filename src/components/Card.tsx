import React from "react";
import CourseCard from "./cards/CourseCard";
import LectureCard from "./cards/LectureCard";
import SectionCard from "./cards/SectionCard";
import { CourseType, SectionType } from "../types/global";

interface props {
  content: CourseType | SectionType;
  type: string;
  opened?: boolean;
}

const Card = ({ content, type, opened }: props) => {
  switch (type) {
    case "course":
      return <CourseCard course={content as CourseType} />;
    case "section":
      return <SectionCard opened={opened} section={content as SectionType} />;
    case "lecture":
      return <LectureCard opened={opened} lecture={content as SectionType} />;
    default:
      break;
  }
};

export default Card;
