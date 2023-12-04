import {
  EnvelopeClosedIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "@radix-ui/react-icons";
import get_user_by_email from "@/src/lib/get_user_by_email";
import Image from "next/image";
import { getServerSession } from "next-auth";
import OutButton from "./OutButton";

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
          <Image
            className=" rounded-[200px]"
            src={"/assets/person.png"}
            alt="Avatar"
            width={350}
            height={350}
          />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          {" "}
          {/*/ right side /*/}
          <h1 className="text-5xl text-right flex">
            !{user?.first_name} مرحبا{" "}
            <span className="text-[#F9C500] text-3xl mx-6">
              <CheckIcon width={60} height={60} />
            </span>
          </h1>
          <h2 className="text-3xl flex my-10">
            {user?.email}
            <span className="text-[#F9C500] text-3xl mx-6">
              <EnvelopeClosedIcon width={40} height={40} />
            </span>
          </h2>
          <OutButton />
        </div>
      </div>
    </>
  );
};

export default profile;
