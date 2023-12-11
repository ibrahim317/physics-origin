import React from "react";
import Link from "next/link";
import Image from "next/image";
import Devider from "../Devider";

const CourseCard = ({ props }: { props: any }) => {
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

export default CourseCard;
