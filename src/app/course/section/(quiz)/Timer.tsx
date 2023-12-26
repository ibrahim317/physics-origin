"use client";
import React from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface props {
	deadline: number;
	StartedState: boolean;
}
const Timer = ({ deadline, StartedState }: props) => {
	const expiryTimestamp = new Date();
	expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + deadline);

	const timer = useTimer({
		autoStart: false,
		expiryTimestamp,
		onExpire: () => console.warn("onExpire called"),
	});

	useEffect(() => {
		if (StartedState == true) {
			timer.start();
		}
	}, [StartedState]);

	return (
		<div className="bg-white p-8 bg-opacity-5 rounded-md my-4">
			<div className="text-center">
				<div className="flex flex-row-reverse text-[100px]">
					<span> {timer.hours}</span>:<span> {timer.minutes}</span>:
					<span> {timer.seconds}</span>
				</div>
			</div>
			<div className="flex justify-between"></div>
		</div>
	);
};
export default Timer;
