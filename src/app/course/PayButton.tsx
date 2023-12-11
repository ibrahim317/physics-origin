import Link from "next/link";

const PayButton = ({ course, opened }: { course: any; opened: any }) => {
  let mybutton;
  if (course.price == 0) {
    mybutton = (
      <div className="flex border-[3px] border-green-400 px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg">
        هذا الكورس مجاني
      </div>
    );
  } else if (!opened) {
    mybutton = (
      <Link
        href={{
          pathname: "/course/pay",
          query: { id: course.id },
        }}
        className="flex border-[3px] border-[#F9C500] px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-lg"
      >
        اشترك الان
      </Link>
    );
  } else {
    mybutton = (
      <div className="flex border-[3px] border-green-400 px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg">
        انت مشترك
      </div>
    );
  }
  return mybutton;
};
export default PayButton;
