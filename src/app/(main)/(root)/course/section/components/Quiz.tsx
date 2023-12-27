"use client";
import { SectionType } from "@/src/types/global";
import Timer from "./(quiz)/Timer";
import { useEffect, useState } from "react";
import QuizContent from "./(quiz)/QuizContent";

interface props {
	section: SectionType;
}
const Quiz = ({ section }: props) => {
	const [QuizPage, setQuizPage] = useState(false);
	const [Submitted, setSumbit] = useState(false);

	const handleQuizPage = () => {
		setQuizPage(!QuizPage);
	};
	const handleSubmit = () => {
		setSumbit(!Submitted);
	};

	return (
		<section className="rtl my-20 min-h-[calc(100vh-13rem)] flex flex-col gap-10">
			<div id="quizHeadings" className="flex flex-col items-center">
				<h2 className="text-4xl  max-md:text-2xl">{section.name}</h2>
				<Timer
					deadline={10}
					Submitted={Submitted}
					handleSubmit={handleSubmit}
					QuizPage={QuizPage}
				/>
			</div>
			<QuizContent
				Questions={section.questions}
				QuizPage={QuizPage}
				handleSubmit={handleSubmit}
				Submitted={Submitted}
				handleQuizPage={handleQuizPage}
			/>
		</section>
	);
};

export default Quiz;
