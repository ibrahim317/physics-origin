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

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

  const handleAnswerSelect = (questionId: string, answer: string) => {
    const currentSelections = selectedAnswers[questionId] || [];
    const updatedSelections = [...currentSelections];

    // Toggle the answer in the selection
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
    <div className="">
      <h2>Quiz Questions</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          <div>
            {question.options.map((option) => (
              <div key={option}>
                <input
                  required
                  type="radio"
                  id={`${question.id}`}
                  name={question.id}
                  value={option}
                  onChange={() => handleAnswerSelect(question.id, option)}
                />
                <label htmlFor={`${option}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
