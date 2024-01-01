import React from "react";
import Devider from "../Devider";
import { SectionType } from "@/src/types/global";
import Container from "./Container";

interface props {
  section: SectionType;
  paid?: boolean;
  passed_last_quiz?: boolean;
}

const SectionCard: React.FC<props> = ({ passed_last_quiz, section, paid }) => {
  let sectionColor = "yellow-500";
  const tag = section.tag;
  // Card button color
  if (tag == "VIDEO") {
    sectionColor = "bg-yellow-400";
  } else if (tag == "FILE") {
    sectionColor = "bg-green-400";
  } else if (tag == "QUIZ") {
    sectionColor = "bg-blue-400";
  }
  const sectionLink = `/course/section/`;

  return (
    <Container
      content={section}
      passed_last_quiz={passed_last_quiz}
      paid={paid}
      link={sectionLink}
    >
      <div className="flex flex-col justify-center">
        <h2 className="p-10 text-4xl font-bold opacity-80 max-[790px]:text-2xl">
          {section.name}
        </h2>
        <div className="-my-5">
          <Devider />
        </div>
        <p className="p-10 text-lg font-light opacity-70 max-sm:text-sm">
          {section.des}
        </p>
      </div>
      <div
        className={
          ` absolute bottom-5 left-6 rounded-xl p-3 text-sm text-black ` +
          sectionColor
        }
      >
        {section.tag}
      </div>
    </Container>
  );
};
export default SectionCard;
