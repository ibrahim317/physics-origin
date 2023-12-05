import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";

const profile = async () => {
  const session = await getServerSession();
  const user = await get_user_by_email(session?.user?.email);
  // [#F9C500]
  return (
    <>
      <div className="h-96 w-full flex">
        {" "}
        {/*/ the container /*/}
        <div className=" w-1/2 h-full hidden md:flex justify-center items-center">
          {" "}
          {/*/ left side /*/}
          {/* <Image
            className=" rounded-[200px]"
            src={"/assets/person.png"}
            alt="Avatar"
            width={350}
            height={350}
          /> */}
          <SentimentSatisfiedAltIcon className="text-[350px]"/>
        </div>
        <div className="w-full md:w-1/4 h-full flex flex-col justify-center items-end">
          {" "}
          {/*/ right side /*/}
          <h1 className="text-5xl text-right flex">
            <span className="text-[#F9C500]">!</span>مرحبا {user?.first_name}
            <span className="text-[#F9C500] text-3xl mx-6">
              <AccountCircleIcon className="text-5xl" />
            </span>
          </h1>
          <div className="flex flex-col items-end my-10">
            {" "}
            {/*/ user information /*/}
            <h2 className="text-3xl flex my-2">
              {user?.email}
              <span className="text-[#F9C500] text-3xl mx-6">
                <MailIcon className="text-4xl" />
              </span>
            </h2>
            <h2 className="text-3xl flex my-2">
              {user?.phone}
              <span className="text-[#F9C500] text-3xl mx-6">
                <CallIcon className="text-4xl" />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
