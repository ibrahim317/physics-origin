"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface SelectedAnswers {
  [questionId: string]: string[];
}

interface QuizProps {
  questions: Question[];
}

const quizTitle = "عنوان الكويييز";
const Quiz: React.FC<QuizProps> = ({ questions }) => {
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
      (question) => !selectedAnswers[question.id]
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
    }
  };

  return (
    <div className="w-4/5 h-screen flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-black bg-white py-10 px-24 m-2 rounded-full">
        {quizTitle}
      </h2>
      {questions.map((question) => (
        <div key={question.id} className="w-full h-screen flex flex-col rtl">
          <p className="text-2xl md:text-4xl py-5">{question.text}</p>
          <form className="rtl">
            {question.options.map((option) => (
              <div key={option} className="py-2">
                <label
                  key={option}
                  htmlFor={`${question.id}_${option}`}
                  className="text-2xl md:text-3xl px-2"
                  style={{
                    cursor: "pointer",
                    display: "block",
                  }}
                >
                  <input
                    required
                    type="radio"
                    id={`${question.id}_${option}`}
                    name={question.id}
                    value={option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                    style={
                      {
                        //   display: "none",
                      }
                    }
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
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
