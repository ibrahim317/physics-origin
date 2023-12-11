import React from "react";
import CourseCard from "./cards/CourseCard";
import LectureCard from "./cards/LectureCard";
import SectionCard from "./cards/SectionCard";

interface props {
  content: any;
  type: string;
  opened?: boolean;
}

const Card: React.FC<props> = ({ content, type, opened }) => {
  switch (type) {
    case "course":
      return <CourseCard course={content} />;
    case "section":
      return <SectionCard opened={opened} section={content} />;
    case "lecture":
      return <LectureCard opened={opened} lecture={content} />;
    default:
      break;
  }
};

export default Card;
