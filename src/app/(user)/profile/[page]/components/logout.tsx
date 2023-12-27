import OutButton from "./OutButton";
import ProfileNavBar from "@/src/components/ProfileNavBar";
const profile = () => {
	return (
		<>
			<ProfileNavBar name="logout" />
			<div className="h-96 w-full flex justify-center items-center">
				<OutButton />
			</div>
		</>
	);
};

export default profile;
