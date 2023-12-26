"use client";
import { SectionType } from "@/src/types/global";
import Timer from "./(quiz)/Timer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizContent from "./(quiz)/QuizContent";

interface props {
	section: SectionType;
}
const Quiz: React.FC<props> = ({ section }) => {
	const router = useRouter();
	const [QuizStarted, setQuizStarted] = useState(false);

	const handleStart = () => {
		setQuizStarted(true);
	};
	return (
		<div className="rtl m-11">
			<div id="quizHeadings" className="flex flex-col items-center">
				<h2 className="text-4xl ">{section.name}</h2>
				<Timer deadline={12} StartedState={QuizStarted} />
				<QuizContent handleStart={handleStart} QuizStarted={QuizStarted} />
			</div>
		</div>
	);
};

export default Quiz;
