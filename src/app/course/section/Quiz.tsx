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
		<section className="rtl my-20 min-h-[calc(100vh-13rem)] flex flex-col gap-10">
			<div id="quizHeadings" className="flex flex-col items-center">
				<h2 className="text-4xl  max-md:text-2xl">{section.name}</h2>
				<Timer deadline={120} StartedState={QuizStarted} />
			</div>
			<QuizContent
				handleStart={handleStart}
				Questions={section.questions}
				QuizStarted={QuizStarted}
			/>
		</section>
	);
};

export default Quiz;
