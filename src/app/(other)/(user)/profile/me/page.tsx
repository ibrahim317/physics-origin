"use client";
import { useSession, signOut } from "next-auth/react";
import { EnvelopeClosedIcon, CheckIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import Image from "next/image";


const profile = () => {

  const { data: session } = useSession();
// [#F9C500]
  return (
    <>
       <div className="h-96 w-full flex"> {/*/ the container /*/}
        <div className=" w-1/2 h-full hidden md:flex justify-center items-center"> {/*/ left side /*/}
          <Image
            className=" rounded-[200px]"
            src={"/assets/person.png"}
            alt="Avatar"
            width={350}
            height={350}
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center"> {/*/ right side /*/}
          <h1 className="text-5xl text-right flex">!مرحبا يا بطل<span className="text-[#F9C500] text-3xl mx-6"><CheckIcon width={60} height={60}/></span></h1>
          <h2 className="text-3xl flex my-10">{session?.user?.email}<span className="text-[#F9C500] text-3xl mx-6"><EnvelopeClosedIcon width={40} height={40}/></span></h2>
          <button onClick={() => signOut()} className="text-xl flex border-[3px] rounded-3xl px-10 py-5 transition ease-in-out duration-300">تسجيل خروج</button>
        </div>

       </div>

    </>
  ); 
};

export default profile;
