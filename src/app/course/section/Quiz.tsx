"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SectionType } from "@/src/types/global";
interface SelectedAnswers {
  [questionId: string]: string[];
}

const quizTitle = "عنوان الكويييز";
interface props {
  section: SectionType;
}
const Quiz: React.FC<props> = ({ section }) => {
  const questions = section.questions;
  const route = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

  const handleAnswerSelect = (questionId: string, answer: string) => {
    const currentSelections = selectedAnswers[questionId] || [];
    const updatedSelections = [...currentSelections];

    if (updatedSelections.includes(answer)) {
      updatedSelections.splice(updatedSelections.indexOf(answer), 1);
    } else {
      updatedSelections.push(answer);
    }

    setSelectedAnswers({ ...selectedAnswers, [questionId]: updatedSelections });
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.filter(
      (question: any) => !selectedAnswers[question.id]
    );

    if (unansweredQuestions.length > 0) {
      toast.error("الرجاء الإجابة علي جميع الأسئلة");
    } else {
      const lastSelectedAnswers: { [questionId: string]: string } = {};
      Object.keys(selectedAnswers).forEach((questionId) => {
        const selectedOptions = selectedAnswers[questionId];
        if (selectedOptions && selectedOptions.length > 0) {
          const lastSelectedOption =
            selectedOptions[selectedOptions.length - 1];
          lastSelectedAnswers[questionId] = lastSelectedOption;
        }
      });

      console.log("Selected Answers:", lastSelectedAnswers);
      route.push("/lecture?id=0"); // Navigate to the lecture if (query) <<<<<<<<<<<<<<<<<<<<<<<< HEMA
    }
  };

  return (
    <div className="w-4/5 h-screen flex flex-col items-center">
      <h2 className="text-xl md:text-3xl text-black bg-white py-5 px-24 m-2 rounded-full my-9">
        {quizTitle}
      </h2>
      {questions.map((question: any) => (
        <div className="w-full h-screen flex md:flex-row flex-col justify-between my-36 md:my-10">
          <div
            key={question.id}
            className="w-full h-full flex md:flex-row flex-col justify-between"
          >
            <div>
              {" "}
              {/**left side */}
              {question.image && (
                <img
                  className="w-96 rounded-[10px]"
                  src={question.image}
                  alt={`Question Image`}
                />
              )}
            </div>
            <div>
              {" "}
              {/**right side */}
              <p className="text-2xl md:text-4xl py-5 bg-[#F9C500] text-black px-6 rounded-[25px] rtl">
                {question.text}
              </p>
              <form className="rtl">
                {question.options.map((option: any) => (
                  <div key={option} className="py-2">
                    <label
                      key={option}
                      htmlFor={`${question.id}_${option}`}
                      className="text-2xl md:text-3xl px-2"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <input
                        required
                        type="radio"
                        id={`${question.id}_${option}`}
                        name={question.id}
                        value={option}
                        onChange={() => handleAnswerSelect(question.id, option)}
                        className="mx-5 my-4"
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="text-xl md:text-3xl text-black bg-[#F9C500] py-4 px-14 md:py-6 md:px-20 m-2 rounded-full hover:opacity-70 transition ease-in-out"
      >
        إنهاء
      </button>
    </div>
  );
};

export default Quiz;
