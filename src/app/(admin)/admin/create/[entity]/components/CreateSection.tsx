import Link from "next/link";
import React from "react";

const CreateSection = ({ courseid }: { courseid: number }) => {
  return (
    <div className="flex w-[99vw] flex-col items-center justify-center gap-28 pt-20">
      <h1 className="text-5xl">Create Section</h1>
      <div className="flex w-full items-center justify-center gap-28 pt-20">
        <Link
          href={{ pathname: "section/quiz", query: { courseid } }}
          className="rounded-md border-2 border-gray-300 p-10 text-center text-3xl font-medium"
        >
          QUIZ
        </Link>
        <Link
          href={{ pathname: "section/video", query: { courseid } }}
          className="rounded-md border-2 border-gray-300 p-10 text-center text-3xl font-medium"
        >
          VIDEO
        </Link>
        <Link
          href={{ pathname: "section/file", query: { courseid } }}
          className="rounded-md border-2 border-gray-300 p-10 text-center text-3xl font-medium"
        >
          FILE
        </Link>
      </div>
    </div>
  );
};

export default CreateSection;
