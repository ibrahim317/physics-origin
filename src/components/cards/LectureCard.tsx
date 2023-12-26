import React, { Children } from "react";
import Devider from "../Devider";
import { SectionType } from "@/src/types/global";
import Container from "./Container";
import PayButton from "./PayButton";

interface props {
	lecture: SectionType;
	paid?: boolean;
}

const LectureCard = ({ lecture, paid }: props) => {
	let lectureColor = "bg-yellow-500";
	const lectureLink = `/lecture`;
	return (
		<Container content={lecture} paid={paid} link={lectureLink}>
			<div className="flex flex-col justify-center">
				<h2 className="text-4xl max-[790px]:text-2xl opacity-80 font-bold p-10">
					{lecture.name}
				</h2>
				<div className="-my-5">
					<Devider />
				</div>
				<p className="font-light opacity-70 text-lg max-sm:text-sm p-10">
					{lecture.des.length > 0 ? lecture.des : lecture.name}
				</p>
			</div>
			<div
				className={
					` rounded-xl p-3 text-sm absolute bottom-5 left-6 text-black ` +
					lectureColor
				}
			>
				{lecture.tag}
			</div>
			<PayButton
				className=" self-start "
				lecture={lecture}
				paid={paid ?? false}
			/>
		</Container>
	);
};

export default LectureCard;
