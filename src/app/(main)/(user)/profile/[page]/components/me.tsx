import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import { get_user_by_email } from "@/src/lib/db/get/get_by/get_user";
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
      <div className="flex h-96 w-full">
        <div className=" hidden h-full w-1/2 items-center justify-center md:flex">
          <Image
            className=" rounded-[200px]"
            src={"/assets/person.png"}
            alt="Avatar"
            width={350}
            height={350}
          />
        </div>
        <div className="flex h-full w-full flex-col items-end justify-center md:w-1/4">
          <h1 className="flex text-right text-5xl">
            <span className="text-[#F9C500]">!</span>مرحبا {user?.name}
            <span className="mx-6 text-[#F9C500]">
              <AccountCircleIcon fontSize="large" />
            </span>
          </h1>
          <div className="my-10 flex flex-col items-end">
            <h2 className="my-2 flex text-3xl">
              {user?.email}
              <span className="mx-6 text-3xl text-[#F9C500]">
                <MailIcon />
              </span>
            </h2>
            <h2 className="my-2 flex text-3xl">
              {user?.phone}
              <span className="mx-6 text-3xl text-[#F9C500]">
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
