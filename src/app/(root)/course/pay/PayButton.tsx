"use client";
import React from "react";
import payment from "@/src/lib/paymob";
import { CourseType, UserType } from "@/src/types/global";

interface props {
	user: UserType | null;
	course: CourseType;
}

const PayButton: React.FC<props> = ({ user, course }) => {
	return (
		<button
			onClick={async () => {
				await payment(course, user);
			}}
			className=" text-lg px-4 py-2 self-center mx-4 max-md:self-start min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
		>
			اشترك
		</button>
	);
};

export default PayButton;
