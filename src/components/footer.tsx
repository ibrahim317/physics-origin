import React from "react";
import Devider from "./Devider";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="h-60 w-full flex justify-center items-center"
      style={{ backgroundColor: `#081022` }}
    >
      <div className="h-4/5">
        <div className="flex justify-center">
          <a href="https://www.youtube.com/@physicsorigin9192" target="_blank" className="m-2 p-2">
            <Image src={"/assets/yt.png"} width={40} height={40} alt="yt" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="m-2 p-2">
          <Image src={"/assets/fb.png"} width={40} height={40} alt="yt" />
          </a>
        </div>
        <div className="opacity-50"><Devider /></div>
        <h4 className="p-5 opacity-70">
          جميع حقوق الطبع والنشر محفوظة{" "}
          <span className="text-[#F9C500]">@</span>2024
        </h4>
      </div>
    </div>
  );
};

export default Footer;
