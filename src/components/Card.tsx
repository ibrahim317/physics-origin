import React from "react";
import CourseImage from "@/public/assets/cource.jpg";
import Image from "next/image";
import Link from "next/link";

const Card = (props: any) => {
  const courseLink = `/course/${props.course.id}`;
  return (
    <Link
      href={courseLink}
      className={`min-h-[500px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image
        src={CourseImage}
        alt="courceImage"
        className="w-full rounded-md"
      />
      <p>{props.course.des}</p>
    </Link>
  );
};

export default Card;
