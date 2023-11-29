import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = (props: any) => {
  console.log(props);
  const courseLink = `/section/${props.course.id}`;
  return (
    <Link
      href={{ pathname: courseLink, query: { id: props.course.id } }}
      className={`min-h-[500px] max-sm:min-h-[350px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <h2 className="text-3xl opacity-80 font-bold">{props.course.name}</h2>
      <p className="font-light opacity-70 text-lg ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolore
        tenetur similique, hic repellat deleniti, molestiae illo molestias sit
        culpa inventore possimus error. Nisi repellat dolore, commodi deleniti
        perferendis excepturi!
      </p>
    </Link>
  );
};

export default Card;
