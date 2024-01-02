import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Container: React.FC<any> = ({
  children,
  paid,
  link,
  content,
  passed_last_quiz,
}) => {
  if (paid && (passed_last_quiz == null || passed_last_quiz == true)) {
    return (
      <Link
        href={{
          pathname: link,
          query: { id: content.id },
        }}
        className={`relative flex min-h-[500px] w-full flex-col gap-5 rounded-lg  p-3 transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:border-y-2 hover:border-solid hover:border-white max-xl:min-h-[250px]`}
        style={{ backgroundColor: `#111827` }}
      >
        {children}
      </Link>
    );
  } else {
    const failed_text =
      passed_last_quiz == false ? (
        <div className="absolute left-36 top-4">
          مغلق حتى النجاح في الامتحان السابق
        </div>
      ) : (
        <></>
      );
    return (
      <div
        className={`relative flex min-h-[500px] w-full flex-col gap-5 rounded-lg  p-3 transition-transform duration-500 ease-in-out hover:-translate-y-4 hover:border-y-2 hover:border-solid hover:border-white max-xl:min-h-[250px]`}
        style={{ backgroundColor: `#111827` }}
      >
        {failed_text}
        <LockClosedIcon
          width={70}
          height={70}
          className="absolute left-4 top-2 opacity-70 max-sm:w-[50px]"
        />
        {children}
      </div>
    );
  }
};
export default Container;
