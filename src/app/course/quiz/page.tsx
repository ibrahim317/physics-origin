import React from "react";
import Quiz from "@/src/components/Quiz";

const questions = [
  {
    id: "1",
    text: "what is?",
    options: ["answer1", "answer2", "answer3", "answer4"],
  },
  {
    id: "2",
    text: "what is two?",
    options: ["answer01", "answer02", "answer03", "answer04"],
  },
];

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Quiz questions={questions}/>
    </div>
  );
};

export default page;
