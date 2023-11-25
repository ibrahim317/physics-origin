"use client"; // may change
// import { useRouter } from "next/navigation";
import "../navstyle.css";

const profile = () => {
  // const router = useRouter();
  // const { data: session } = useSession(); // tells if you have a session or not (logged in or not)

  // if (!session) {
  //   // if NOT logged in
  //   return router.push("/login");
  // }

  return (
    // if logged in
    <>
      <div
        className="w-full bg-cover h-screen"
        style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
      >
        <div className="fixed flex items-center justify-around w-full h-28 px-20">
          <nav className="h-20 flex justify-around items-center w-1/3 drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20">
              <a href="./myhistory" className="text-white hover:text-black transition ease-in-out duration-700">السجل</a>
              <a href="./mycourses" className="text-white hover:text-black transition ease-in-out duration-700">كورساتي</a>
              <a className="me text-white hover:text-black transition ease-in-out duration-700">حسابي</a>
              <div className="animation start-me"></div>
          </nav>
        </div>

        <h1 className=" text-center">This Is My Account!</h1>
        
      </div>
    </>
  );
};

export default profile;
