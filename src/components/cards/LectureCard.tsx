import React, { Children } from "react";
import Devider from "../Devider";
import { SectionType } from "@/src/types/global";
import Container from "./Container";
import PayButton from "./PayButton";

interface props {
  lecture: SectionType;
  opened?: boolean;
}

const LectureCard = ({ lecture, opened }: props) => {
  let lectureColor = "bg-yellow-500";
  const lectureLink = `/lecture`;
  return (
    <Container content={lecture} opened={opened} link={lectureLink}>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl max-[790px]:text-2xl opacity-80 font-bold p-10">
          {lecture.name}
        </h2>
        <div className="-my-5">
          <Devider />
        </div>
        <p className="font-light opacity-70 text-lg max-sm:text-sm p-10">
          {lecture.des}
        </p>
      </div>
      <div
        className={
          ` rounded-xl p-3 text-sm absolute bottom-5 left-6 text-black ` +
          lectureColor
        }
      >
        {lecture.tag}
      </div>
      <PayButton
        className=" self-start "
        lecture={lecture}
        opened={opened ?? false}
      />
    </Container>
  );
};

export default LectureCard;
