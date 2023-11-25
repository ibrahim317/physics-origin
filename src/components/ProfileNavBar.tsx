import "@/src/styles/navstyle.css";

const ProfileNavBar = (props: any) => {
  return (
    <>
        <div className="fixed flex items-center justify-around w-full h-28 px-20">
          <nav className="h-20 flex justify-around items-center w-[490px] drop-shadow-md shadow-lg rounded-[50px] bg-black bg-opacity-20">
              <a href="./myhistory" className="text-white hover:text-black transition ease-in-out duration-700">السجل</a>
              <a href="./mycourses" className="text-white hover:text-black transition ease-in-out duration-700">كورساتي</a>
              <a href="./me" className="me text-white hover:text-black transition ease-in-out duration-700">حسابي</a>
              <div className={"animation " + props.start}></div>
          </nav>
        </div>
    </>
  )
}

export default ProfileNavBar