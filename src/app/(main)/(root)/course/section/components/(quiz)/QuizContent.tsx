"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/src/types/global";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import q1 from "@/public/assets/q1.png";

interface QuizContentProps {
  Questions: QuestionType[];
  Submitted: boolean;
  QuizPage: boolean;
  handleSubmit: () => void;
  handleQuizPage: () => void;
}
interface TestComponentProps {
  Questions: QuestionType[];
  Submitted: boolean;
  handleSubmit: () => void;
}
const QuizContent = (props: QuizContentProps) => {
  switch (props.QuizPage) {
    case true:
      return (
        <TestComponent
          handleSubmit={props.handleSubmit}
          Submitted={props.Submitted}
          Questions={props.Questions}
        />
      );
    case false:
      return <NavButtons handleQuizPage={props.handleQuizPage} />;

    default:
      break;
  }
};
const TestComponent = (props: TestComponentProps) => {
  const { register, handleSubmit } = useForm();
  const submit = (data: any) => {
    if (!props.Submitted) {
      props.handleSubmit();
    }
    console.log(data);
  };
  useEffect(() => {
    if (props.Submitted) {
      handleSubmit(submit)();
    }
  }, [props.Submitted]);

  return (
    <form className="p-5" onSubmit={handleSubmit((data) => submit(data))}>
      {props.Questions.map((question, questionIndex) => {
        return (
          <div key={questionIndex} className="mb-12">
            <h1 className="mb-5 text-[30px] font-medium">
              {question.question_head}
            </h1>
            <div className="flex justify-between gap-6 max-md:flex-col">
              <ul className="relative flex w-max flex-col flex-wrap gap-2 max-md:w-[100%]">
                {question.options.map((option, index) => {
                  const id = uuidv4();
                  return (
                    <li key={index} className="flex gap-3 text-[25px]">
                      <input
                        id={id}
                        type="radio"
                        value={option}
                        className="appearance-none"
                        {...register(`question-${questionIndex}`)}
                        required
                      />
                      <label
                        htmlFor={id}
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-3 text-gray-500 duration-150 hover:bg-gray-100 hover:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        {option}
                      </label>
                      <style jsx>{`
                        input:checked ~ label {
                          border: 3px solid;
                          border-color: yellow;
                        }
                      `}</style>
                    </li>
                  );
                })}
              </ul>
              <div className="mx-10">
                <Image src={question.image ?? q1} alt=""></Image>
              </div>
            </div>
          </div>
        );
      })}
      <button
        type="submit"
        className="bg-color mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-[#000] transition duration-300 ease-in-out hover:bg-[#FFF] max-sm:px-5"
      >
        انهاء الاختبار
      </button>
    </form>
  );
};
const NavButtons = (props: any) => {
  const router = useRouter();
  return (
    <div className="flex w-screen justify-center gap-7">
      <button
        onClick={props.handleQuizPage}
        className="rounded-md bg-white p-4 text-black"
      >
        Start
      </button>
      <button
        onClick={() => router.back()}
        className="rounded-md bg-white p-4 text-black"
      >
        Go back
      </button>
    </div>
  );
};
export default QuizContent;
