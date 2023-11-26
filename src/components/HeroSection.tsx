import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center h-[calc(100vh-6rem)] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
      <div>
        <Image
          src={"/assets/design.png"}
          alt="Physics Origin"
          width={500}
          height={500}
          className="max-w-[80%] m-auto"
        />
      </div>
      <div className="absolute inset-x-0 -bottom-1 bg-cyan-400 dark:bg-cyan-900 smooth h-1 transform  translate-y-0">
        <div
          className=" bg-cyan-700 dark:bg-cyan-400 h-full left-0 absolute transition-colors duration-300"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
