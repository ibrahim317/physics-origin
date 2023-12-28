import React from "react";
import Devider from "../Devider";
import { LectureType } from "@/src/types/global";
import Container from "./Container";
import PayButton from "./PayButton";

interface props {
  lecture: LectureType;
  paid?: boolean;
}

const LectureCard = ({ lecture, paid }: props) => {
  let lectureColor = "bg-yellow-500";
  const lectureLink = `/lecture`;
  return (
    <Container content={lecture} paid={paid} link={lectureLink}>
      <div className="flex flex-col justify-center">
        <h2 className="p-10 text-4xl font-bold opacity-80 max-[790px]:text-2xl">
          {lecture.name}
        </h2>
        <div className="-my-5">
          <Devider />
        </div>
        <p className="p-10 text-lg font-light opacity-70 max-sm:text-sm">
          {lecture.des.length > 0 ? lecture.des : lecture.name}
        </p>
      </div>
      <div
        className={
          ` absolute bottom-5 left-6 rounded-xl p-3 text-sm text-black ` +
          lectureColor
        }
      ></div>
      <PayButton
        className=" self-start "
        lecture={lecture}
        paid={paid ?? false}
      />
    </Container>
  );
};

export default LectureCard;
