import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import { get_user_by_email } from "@/src/lib/db/get_user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProfileNavBar from "@/src/components/ProfileNavBar";

const profile = async () => {
	const session = await getServerSession();
	if (!session) redirect("/login");
	const user = await get_user_by_email(session?.user?.email);
	return (
		<>
			<ProfileNavBar name="profile" />
			<div className="h-96 w-full flex">
				<div className=" w-1/2 h-full hidden md:flex justify-center items-center">
					<Image
						className=" rounded-[200px]"
						src={"/assets/person.png"}
						alt="Avatar"
						width={350}
						height={350}
					/>
				</div>
				<div className="w-full md:w-1/4 h-full flex flex-col justify-center items-end">
					<h1 className="text-5xl text-right flex">
						<span className="text-[#F9C500]">!</span>مرحبا {user?.first_name}
						<span className="text-[#F9C500] mx-6">
							<AccountCircleIcon fontSize="large" />
						</span>
					</h1>
					<div className="flex flex-col items-end my-10">
						<h2 className="text-3xl flex my-2">
							{user?.email}
							<span className="text-[#F9C500] text-3xl mx-6">
								<MailIcon />
							</span>
						</h2>
						<h2 className="text-3xl flex my-2">
							{user?.phone}
							<span className="text-[#F9C500] text-3xl mx-6">
								<CallIcon />
							</span>
						</h2>
					</div>
				</div>
			</div>
		</>
	);
};

export default profile;
