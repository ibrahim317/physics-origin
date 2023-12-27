"use client";
import React from "react";
import payment from "@/src/lib/paymob";
import { SectionType, UserType } from "@/src/types/global";

interface props {
	user: UserType | null;
	lecture: SectionType;
}

const PayButton: React.FC<props> = ({ user, lecture }) => {
	return (
		<button
			onClick={async () => {
				await payment(lecture, user);
			}}
			className=" text-lg px-4 py-2 self-center mx-4 max-md:self-start min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300"
		>
			اشترك
		</button>
	);
};

export default PayButton;
