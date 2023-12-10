import React from "react";
import Image from "next/image";
import Link from "next/link";
import Devider from "./Devider";
import { LockClosedIcon } from "@radix-ui/react-icons";

const couresCard = (props: any) => {
  const courseLink = `/course`;
  return (
    <Link
      href={{ pathname: courseLink, query: { id: props.content.id } }}
      className={`min-h-[500px] max-sm:min-h-[350px] rtl hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-10 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image
        src={props.content.thumbnail}
        width={300}
        height={300}
        alt="courseImage"
        className="w-full  rounded-md"
      />
      <h2 className="text-3xl font-bold">{props.content.name}</h2>
      <div className="-my-5">
        <Devider />
      </div>
      <ul className="font-light opacity-70 text-lg ">
        {props.content.des.map((text: any) => (
          <li>{text}</li>
        ))}
      </ul>
    </Link>
  );
};
const sectionCard = (props: any) => {
  let sectionColor = "yellow-500";
  const tag = props.content.tag;
  // Card button color
  if (tag == "video") {
    sectionColor = "bg-yellow-400";
  } else if (tag == "file") {
    sectionColor = "bg-green-400";
  } else if (tag == "quiz") {
    sectionColor = "bg-blue-400";
  }
  const sectionLink = `/course/section/`;
  if (props.locked === false) {
    return (
      <Link
        href={{ pathname: sectionLink, query: { id: props.content.id } }}
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
            sectionColor
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
            sectionColor
          }
        >
          {props.content.tag}
        </div>
      </div>
    );
  }
};
const lectureCard = (props: any) => {};

const Card = (props: any) => {
  switch (props.type) {
    case "course":
      return couresCard(props);
    case "section":
      return sectionCard(props);
    case "lecture":
      break;
    default:
      break;
  }
};

export default Card;
