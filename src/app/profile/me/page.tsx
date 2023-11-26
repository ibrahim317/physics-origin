"use client"; // may change
import ProfileNavBar from "@/src/components/ProfileNavBar";
// import { useRouter } from "next/navigation";

const profile = () => {
  // const router = useRouter();
  // const { data: session } = useSession(); // tells if you have a session or not (logged in or not)

  // if (!session) {
  //   // if NOT logged in
  //   return router.push("/login");
  // }

  return (
    <>
      <div
        className="w-full bg-cover h-screen"
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <ProfileNavBar start="start-me"/>
      </div>
      
    </>    
  );
};

export default profile;
