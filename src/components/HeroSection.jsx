import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div>
        <Image
          src={"/assets/design.png"}
          alt="Physics Origin"
          width={500}
          height={500}
        />
      </div>
      <div>
        <Image
          className="absolute bottom-0 left-1/2 my-6"
          src={"/assets/scroll.png"}
          width={50}
          height={50}
        />
      </div>
    </section>
  );
};

export default HeroSection;
