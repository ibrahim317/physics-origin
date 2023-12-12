import Link from "next/link";
import { SectionType } from "@/src/types/global";
interface props {
  lecture: SectionType;
  opened: boolean;
  className?: string;
}

const PayButton: React.FC<props> = ({ lecture, opened, className }) => {
  let mybutton;
  if (lecture.price == 0) {
    mybutton = (
      <div
        className={
          "flex border-[3px] border-green-400 px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg" +
          className
        }
      >
        هذا الكورس مجاني
      </div>
    );
  } else if (!opened) {
    mybutton = (
      <Link
        href={{
          pathname: "/lecture/pay",
          query: { id: lecture.id },
        }}
        className={
          "flex border-[3px] border-[#F9C500] px-6 max-[660px]:px-3 py-3 mx-4  text-white hover:text-[#F9C500] transition ease-in-out duration-300 rounded-[25px] text-lg" +
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
          "flex border-[3px] border-green-400 px-6 max-[660px]:px-2 py-3 mx-4  text-white hover:scale-[102%] rounded-[25px] text-lg" +
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
