import React, { useState } from "react";
import CourceImage from "@/public/assets/cource.jpg";
import Image from "next/image";
const Card = () => {
  return (
    <div
      className={`min-h-[500px] hover:border-solid hover:border-y-2 hover:border-white  hover:-translate-y-4 transition-transform duration-500 ease-in-out flex flex-col p-3 gap-5 rounded-lg`}
      style={{ backgroundColor: `#111827` }}
    >
      <Image
        src={CourceImage}
        alt="courceImage"
        className="w-full rounded-md"
      />
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
