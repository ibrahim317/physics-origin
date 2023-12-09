"use client";
import "@/src/styles/navstyle.css";
import { usePathname } from "next/navigation";
import { getLastSegmentFromUrl } from "../lib/get_last_word";
const ProfileNavBar = (props: any) => {
  const pathname = usePathname();
  const name = getLastSegmentFromUrl(pathname);
  return (
    <>
      <div className="fixed flex items-center justify-around w-full h-28 px-20">
        <nav className="h-20 max-[500px]:max-h-20 snav flex justify-around items-center w-[490px] max-[500px]:max-w-[300px] drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20">
          <a
            href="./logout"
            className="text-white max-sm:text-md  hover:text-black transition ease-in-out duration-700"
          >
            الخروج
          </a>
          <a
            href="./mycourses"
            className="text-white max-sm:text-md hover:text-black transition ease-in-out duration-700"
          >
            كورساتي
          </a>
          <a
            href="./me"
            className="me text-white max-sm:text-md hover:text-black transition ease-in-out duration-700"
          >
            حسابي
          </a>
          <div className={"animation " + name}></div>
        </nav>
      </div>{" "}
      <div className="h-24"></div> {/* reseves a space */}
    </>
  );
};

export default ProfileNavBar;
