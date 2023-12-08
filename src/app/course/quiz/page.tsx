import React from "react";
import Quiz from "@/src/components/Quiz";

const questions = [
  {
    id: "1",
    text: "ما هو اسرع حيوان في المريخ؟",
    options: ["الاسد", "الزرافة", "الفهد", "الموز"],
  },
  {
    id: "2",
    text: "ما هو الشيء؟",
    options: ["الشيء", "الانسان", "البطيخ", "الموز بردو"],
  },
  {
    id: "3",
    text: "ما هو الشيء؟",
    options: ["الشيء", "الانسان", "البطيخ", "الموز بردو"],
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
