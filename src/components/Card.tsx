import React, { useState } from "react";
import CourceImage from "@/public/assets/cource.jpg";
import Image from "next/image";
const Card = () => {
  return (
    <div
      className={`min-h-[500px] hover:-translate-x-4 hover:-translate-y-4 duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-md`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image src={CourceImage} alt="courceImage" className="w-full" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum
        magnam molestias qui pariatur doloribus a libero distinctio molestiae
        illo non tempore corporis inventore, ullam reiciendis tempora
        necessitatibus! Incidunt, sit!
      </p>
    </div>
  );
};

export default Card;
