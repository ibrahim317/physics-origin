import "@/src/styles/navstyle.css";
const ProfileNavBar = (props: any) => {
  return (
    <>
      <div className="absolute flex h-28 w-full items-center justify-around px-20">
        <nav className="snav flex h-20 w-[490px] items-center justify-around rounded-[50px] bg-black bg-opacity-20 shadow-lg drop-shadow-md max-[500px]:max-h-20 max-[500px]:max-w-[300px]">
          <a
            href="./logout"
            className="max-sm:text-md text-white  transition duration-700 ease-in-out hover:text-black"
          >
            الخروج
          </a>
          <a
            href="./mycourses"
            className="max-sm:text-md text-white transition duration-700 ease-in-out hover:text-black"
          >
            كورساتي
          </a>
          <a
            href="./me"
            className="me max-sm:text-md text-white transition duration-700 ease-in-out hover:text-black"
          >
            حسابي
          </a>
          <div className={"animation " + props.name}></div>
        </nav>
      </div>{" "}
      <div className="h-24"></div> {/* reseves a space */}
    </>
  );
};

export default ProfileNavBar;
