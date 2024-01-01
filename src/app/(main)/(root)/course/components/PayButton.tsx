import Link from "next/link";
import { CourseType } from "@/src/types/global";
interface props {
  course: CourseType;
  paid: boolean;
}

const PayButton: React.FC<props> = ({ course, paid }) => {
  let mybutton;
  if (course.price == 0) {
    mybutton = (
      <div className="mx-4 flex rounded-[25px] border-[3px] border-green-400 px-6 py-3  text-lg text-white hover:scale-[102%] max-[660px]:px-3">
        هذا الكورس مجاني
      </div>
    );
  } else if (!paid) {
    mybutton = (
      <Link
        href={{
          pathname: "/course/pay",
          query: { id: course.id },
        }}
        className="mx-4 flex rounded-[25px] border-[3px] border-[#F9C500] px-6 py-3  text-lg text-white transition duration-300 ease-in-out hover:text-[#F9C500] max-[660px]:px-3"
      >
        اشترك الان
      </Link>
    );
  } else {
    mybutton = (
      <div className="mx-4 flex rounded-[25px] border-[3px] border-green-400 px-6 py-3  text-lg text-white hover:scale-[102%] max-[660px]:px-3">
        انت مشترك
      </div>
    );
  }
  return mybutton;
};
export default PayButton;
