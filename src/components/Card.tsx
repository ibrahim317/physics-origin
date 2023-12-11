import React from "react";
import CourseCard from "./cards/CourseCard";
import LectureCard from "./cards/LectureCard";
import SectionCard from "./cards/SectionCard";

const Card = (props: any) => {
  switch (props.type) {
    case "course":
      return <CourseCard props={props} />;
    case "section":
      return <SectionCard props={props} />;
    case "lecture":
      return <LectureCard props={props} />;
    default:
      break;
  }
};

export default Card;
