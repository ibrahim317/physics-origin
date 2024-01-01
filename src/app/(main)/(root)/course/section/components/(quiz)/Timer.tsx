"use client";
import React from "react";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface props {
  deadline: number;
  handleSubmit: any;
  QuizPage: boolean;
  Submitted: boolean;
}
const Timer = ({ deadline, QuizPage, Submitted, handleSubmit }: props) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + deadline);

  const timer = useTimer({
    autoStart: false,
    expiryTimestamp,
    onExpire: () => {
      handleSubmit();
      console.warn("onExpire called");
    },
  });

  useEffect(() => {
    if (QuizPage) timer.start();
    if (Submitted) timer.pause();
  }, [QuizPage, Submitted]);

  return (
    <div className="my-4 rounded-md bg-white bg-opacity-5 p-8">
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
