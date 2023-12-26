"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface props {
	QuizStarted: boolean;
	handleStart: () => void;
}
const QuizContent = ({ QuizStarted, handleStart }: props) => {
	const router = useRouter();
	const MainButtons = (
		<>
			<div className="flex gap-7">
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
		</>
	);
	return <div>{!QuizStarted ? MainButtons : <>LETS'GOOO</>}</div>;
};

export default QuizContent;
