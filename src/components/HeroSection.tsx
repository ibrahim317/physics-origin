import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center gap-8 items-center h-[calc(100vh)] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
      <div>
        <Image
          src={"/assets/design.png"}
          alt="Physics Origin"
          width={500}
          height={500}
          className="max-w-[80%] mx-auto mb-8"
        />
        <div className="flex justify-center">
          <Link
            href="/register"
            className="px-10 max-sm:px-5  py-4 mx-4 min-w-max text-black bg-[#F9C500] rounded-lg hover:bg-[#ffffff] transition ease-in-out duration-300"
          >
            !اشترك الان
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
