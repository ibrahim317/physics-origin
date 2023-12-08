import React from "react";
import Image from "next/image";
import Link from "next/link";
import Devider from "./Devider";
import { LockClosedIcon } from "@radix-ui/react-icons";

const Card = (props: any) => {
  if (props.type == "lecture") {
    const lectureLink = `/lecture`;
    return (
      <Link
        href={{ pathname: lectureLink, query: { id: props.content.id } }}
        className={`min-h-[500px] max-sm:min-h-[350px] rtl hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        <Image
          src={props.content.thumbnail}
          width={300}
          height={300}
          alt="lectureImage"
          className="w-full max-h-[70%] rounded-md"
        />
        <h2 className="text-3xl font-bold">{props.content.name}</h2>
        <ul className="font-light opacity-70 text-lg ">
          {props.content.des.map((text: any) => (
            <li>{text}</li>
          ))}
        </ul>
      </Link>
    );
  } else {
    const sectionLink = `/lecture/section/`;
    if (props.locked === false) {
      return (
        <Link
          href={{ pathname: sectionLink, query: { id: props.content.id } }}
          className={`min-h-[500px] max-sm:min-h-[350px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
          style={{ backgroundColor: `#111827` }}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl opacity-80 font-bold p-10">
              {props.content.name}
            </h2>
            <div className="-my-5">
              <Devider />
            </div>
            <p className="font-light opacity-70 text-lg p-10">
              {props.content.des}
            </p>
          </div>
        </Link>
      );
    } else {
      return (
        <div
          className={`min-h-[500px] max-sm:min-h-[350px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
          style={{ backgroundColor: `#111827` }}
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <h2 className="text-4xl opacity-80 font-bold p-10">
                {props.content.name}
              </h2>
              <LockClosedIcon width={70} height={70} className="opacity-70" />
            </div>
            <div className="-my-5">
              <Devider />
            </div>
            <p className="font-light opacity-70 text-lg p-10">
              {props.content.des}
            </p>
          </div>
        </div>
      );
    }
  }
};

export default Card;
