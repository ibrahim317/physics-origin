import { LockClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const Container: React.FC<any> = ({ children, opened, link, content }) => {
  if (opened) {
    return (
      <Link
        href={{ pathname: link, query: { id: content.id } }}
        className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
        style={{ backgroundColor: `#111827` }}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      className={`min-h-[500px] max-xl:min-h-[250px] w-full relative hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col justify-around p-3 gap-5 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <LockClosedIcon
        width={70}
        height={70}
        className="opacity-70 absolute top-4 left-4 max-sm:w-8"
      />
      {children}
    </div>
  );
};
export default Container;
