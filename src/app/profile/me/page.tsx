"use client";
import { useSession } from "next-auth/react";
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';

const profile = () => {

  const { data: session } = useSession();
// [#F9C500]
  return (
    <>
       <div className="container h-96 w-full flex"> {/*/ the container /*/}

        <div className=" w-1/2 h-full"> {/*/ left side /*/}

        </div>

        <div className="w-1/2 h-full flex flex-col justify-center items-center"> {/*/ right side /*/}
          <h1 className="text-5xl my-8">!مرحبا يا بطل</h1>
          <h2 className="text-2xl flex">{session?.user?.email}<span className="text-[#F9C500] text-3xl mx-6"><EnvelopeClosedIcon width={40} height={40}/></span></h2>
        </div>

       </div>

    </>
  ); 
};

export default profile;
