"use client";
import React from "react";
import CourceImage from "@/public/assets/cource.jpg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Card = (props: any) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  const courseLink = `/course/${props.course.id}`;
  return (
    <Link
      onClick={async () =>
        await instance.post(`/api/current_course`, props.course.id)
      }
      href={courseLink}
      className={`min-h-[500px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image
        src={props.course.thumbnail}
        width={300}
        height={300}
        alt="courceImage"
        className="w-full rounded-md"
      />
      <p>{props.course.des}</p>
    </Link>
  );
};

export default Card;
