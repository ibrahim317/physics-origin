import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center gap-8 items-center h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
      <div>
        <Image
          src={"/assets/design.png"}
          alt="Physics Origin"
          width={500}
          height={500}
          className="max-w-[80%] mx-auto mb-8 -my-36"
        />
        <div className="flex justify-center">
          <Link
            href="/register"
            className="px-10 max-sm:px-5 py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-[25px] hover:bg-[#ffffff] transition ease-in-out duration-300 text-xl"
          >
            !!ابدأ طريق التفوق في الفيزياء
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
