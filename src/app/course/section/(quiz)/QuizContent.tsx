"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { QuestionType } from "@/src/types/global";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import q1 from "@/public/assets/q1.png";

interface props {
	QuizStarted: boolean;
	handleStart: () => void;
	Questions: QuestionType[];
}
const TestComponent = ({ Questions }: { Questions: QuestionType[] }) => {
	console.log("Qeustions: " + Questions);
	return (
		<form className="p-5">
			{Questions.map((question, questionIndex) => {
				return (
					<div key={questionIndex} className="mb-12">
						<h1 className="font-medium text-[30px] mb-5">
							{question.question_head}
						</h1>
						<div className="flex max-md:flex-col gap-6 justify-between">
							<ul className="flex relative w-max flex-col max-md:w-[100%] gap-2 flex-wrap">
								{question.options.map((option, index) => {
									const id = uuidv4();
									return (
										<li key={index} className="flex gap-3 text-[25px]">
											<input
												id={id}
												type="radio"
												name={`question-${questionIndex}`}
												value={option}
												className="appearance-none"
											/>
											<label
												htmlFor={id}
												className="inline-flex items-center w-full duration-150 justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
		</form>
	);
};
const QuizContent = ({ Questions, QuizStarted, handleStart }: props) => {
	const router = useRouter();
	const MainButtons = (
		<div className="w-screen flex justify-center gap-7">
			<button
				onClick={handleStart}
				className="bg-white p-4 rounded-md text-black"
			>
				Start
			</button>
			<button
				onClick={() => router.back()}
				className="bg-white p-4 rounded-md text-black"
			>
				Go back
			</button>
		</div>
	);
	return (
		<div>
			{!QuizStarted ? MainButtons : <TestComponent Questions={Questions} />}
		</div>
	);
};

export default QuizContent;
