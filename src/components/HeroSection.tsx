import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center h-screen w-full bg-cover bg-center"
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
    </section>
  );
};

export default HeroSection;
