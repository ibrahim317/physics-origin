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
												value={option}
												className="appearance-none"
												{...register(`question-${questionIndex}`)}
												required
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
			<button
				type="submit"
				className="text-[#000] bg-color px-10 max-sm:px-5 py-4 mx-4 min-w-max bg-[#F9C500] hover:bg-[#FFF] transition ease-in-out duration-300 rounded-[25px]"
			>
				انهاء الاختبار
			</button>
		</form>
	);
};
const NavButtons = (props: any) => {
	const router = useRouter();
	return (
		<div className="w-screen flex justify-center gap-7">
			<button
				onClick={props.handleQuizPage}
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
};
export default QuizContent;
