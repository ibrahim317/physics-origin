import React from "react";
import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Devider from "../Devider";

const LectureCard = ({ props }: { props: any }) => {
  let lectureColor = "yellow-500";
  const tag = props.content.tag;
  // Card button color
  if (tag == "VIDEO") {
    lectureColor = "bg-yellow-400";
  } else if (tag == "FILE") {
    lectureColor = "bg-green-400";
  } else if (tag == "QUIZ") {
    lectureColor = "bg-blue-400";
  }
  const lectureLink = `/course/lecture/`;
  if (props.opened === true) {
    return (
      <Link
        href={{ pathname: lectureLink, query: { id: props.content.id } }}
        className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl max-[790px]:text-2xl opacity-80 font-bold p-10">
            {props.content.name}
          </h2>
          <div className="-my-5">
            <Devider />
          </div>
          <p className="font-light opacity-70 text-lg max-sm:text-sm p-10">
            {props.content.des}
          </p>
        </div>
        <div
          className={
            ` rounded-xl p-3 text-sm absolute bottom-5 left-6 text-black ` +
            lectureColor
          }
        >
          {props.content.tag}
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <h2 className="text-4xl opacity-80 max-sm:text-2xl font-bold p-10">
              {props.content.name}
            </h2>
            <LockClosedIcon
              width={70}
              height={70}
              className="opacity-70 absolute top-4 left-4 max-sm:w-8"
            />
          </div>
          <div className="-my-5">
            <Devider />
          </div>
          <p className="font-light opacity-70 text-lg max-sm:text-sm p-10">
            {props.content.des}
          </p>
        </div>{" "}
        <div
          className={
            ` rounded-xl p-3 text-sm absolute bottom-5 left-6 text-black ` +
            lectureColor
          }
        >
          {props.content.tag}
        </div>
      </div>
    );
  }
};

export default LectureCard;
