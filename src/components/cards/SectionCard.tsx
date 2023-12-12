import React from "react";
import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Devider from "../Devider";
import { SectionType } from "@/src/types/global";
import Container from "./Container";

interface props {
  section: SectionType;
  opened?: boolean;
}

const SectionCard: React.FC<props> = ({ section, opened }) => {
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
    <Container content={section} opened={opened} link={sectionLink}>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl max-[790px]:text-2xl opacity-80 font-bold p-10">
          {section.name}
        </h2>
        <div className="-my-5">
          <Devider />
        </div>
        <p className="font-light opacity-70 text-lg max-sm:text-sm p-10">
          {section.des}
        </p>
      </div>
      <div
        className={
          ` rounded-xl p-3 text-sm absolute bottom-5 left-6 text-black ` +
          sectionColor
        }
      >
        {section.tag}
      </div>
    </Container>
  );
};
export default SectionCard;
