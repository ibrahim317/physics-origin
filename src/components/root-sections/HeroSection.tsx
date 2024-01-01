import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  return (
    <section
      className="flex h-screen w-full items-center justify-center gap-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
      <div>
        <Image
          src={"/assets/design.png"}
          alt="Physics Origin"
          width={500}
          height={500}
          className="-my-36 mx-auto mb-8 max-w-[80%]"
        />
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/register"
            className="mx-4 min-w-max rounded-[25px] bg-[#F9C500] px-10 py-4 text-xl text-black transition duration-300 ease-in-out hover:bg-[#ffffff] max-sm:px-5"
          >
            !!ابدأ طريق التفوق في الفيزياء
          </Link>
          <Link
            href="#coursesSection"
            className="mx-4 flex min-w-max rounded-[25px] border-[3px] border-[#F9C500] px-10 py-4 text-xl text-white transition duration-300 ease-in-out hover:text-[#F9C500] max-sm:px-5"
          >
            <DoubleArrowDownIcon width={25} height={25} />
            شوف الكورسات
          </Link>
          <Link href={"/about"}>
            <p className="opacity-70 hover:opacity-100">
              اعــرف أســتاذك ... ؟
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
