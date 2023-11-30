import React from "react";
import Image from "next/image";
import Link from "next/link";
import Devider from "./Devider";

const Card = (props: any) => {
  if (props.type == "course") {
    const courseLink = `/course`;
    return (
      <Link
        href={{ pathname: courseLink, query: { id: props.content.id } }}
        className={`min-h-[500px] max-sm:min-h-[350px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        <Image
          src={props.content.thumbnail}
          width={300}
          height={300}
          alt="CourseImage"
          className="w-full max-h-[70%] rounded-md"
        />
        <h2 className="text-3xl opacity-80 font-bold">{props.content.name}</h2>
        <p className="font-light opacity-70 text-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolore
          tenetur similique, hic repellat deleniti, molestiae illo molestias sit
          culpa inventore possimus error. Nisi repellat dolore, commodi deleniti
          perferendis excepturi!
        </p>
      </Link>
    );
  } else {
    const sectionLink = `/course/section/`;
    return (
      <Link
        href={{ pathname: sectionLink, query: { id: props.content.id } }}
        className={`min-h-[500px] max-sm:min-h-[350px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl opacity-80 font-bold p-10">{props.content.name}</h2>
          <div className="-my-5"><Devider /></div>
          <p className="font-light opacity-70 text-lg p-10">
            {props.content.des}
          </p>
        </div>
      </Link>
    );
  }
};

export default Card;
