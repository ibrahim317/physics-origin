import Link from "next/link";
import { LectureType } from "@/src/types/global";
interface props {
  lecture: LectureType;
  paid: boolean;
  className?: string;
}

const PayButton: React.FC<props> = ({ lecture, paid, className }) => {
  let mybutton;
  if (lecture.price == 0) {
    mybutton = (
      <div
        className={
          "mx-4 flex rounded-[25px] border-[3px] border-green-400 px-6 py-3  text-lg text-white hover:scale-[102%] max-[660px]:px-3" +
          className
        }
      >
        هذا الكورس مجاني
      </div>
    );
  } else if (!paid) {
    mybutton = (
      <Link
        href={{
          pathname: "/lecture/pay",
          query: { id: lecture.id },
        }}
        className={
          "mx-4 flex rounded-[25px] border-[3px] border-[#F9C500] px-6 py-3  text-lg text-white transition duration-300 ease-in-out hover:text-[#F9C500] max-[660px]:px-3" +
          className
        }
      >
        اشترك الان
      </Link>
    );
  } else {
    mybutton = (
      <div
        className={
          "mx-4 flex rounded-[25px] border-[3px] border-green-400 px-6 py-3  text-lg text-white hover:scale-[102%] max-[660px]:px-2" +
          className
        }
      >
        انت مشترك
      </div>
    );
  }
  return mybutton;
};
export default PayButton;
