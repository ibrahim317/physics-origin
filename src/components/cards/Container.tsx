import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Container: React.FC<any> = ({
	children,
	paid,
	link,
	content,
	passed_last_quiz,
}) => {
	if (paid && (passed_last_quiz == null || passed_last_quiz == true)) {
		return (
			<Link
				href={{ pathname: link, query: { id: content.id } }}
				className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
				style={{ backgroundColor: `#111827` }}
			>
				{children}
			</Link>
		);
	} else {
		const failed_text =
			passed_last_quiz == false ? (
				<div className="absolute top-4 left-36">
					مغلق حتى النجاح في الامتحان السابق
				</div>
			) : (
				<></>
			);
		return (
			<div
				className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
				style={{ backgroundColor: `#111827` }}
			>
				{failed_text}
				<LockClosedIcon
					width={70}
					height={70}
					className="opacity-70 absolute top-2 left-4 max-sm:w-[50px]"
				/>
				{children}
			</div>
		);
	}
};
export default Container;
