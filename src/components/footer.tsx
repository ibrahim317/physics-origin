import React from "react";
import Devider from "./Devider";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="mt-auto flex h-60 w-full items-center justify-center"
      style={{ backgroundColor: `#081022` }}
    >
      <div className="h-4/5">
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/@physicsorigin9192"
            target="_blank"
            className="m-2 p-2"
          >
            <Image src={"/assets/yt.png"} width={40} height={40} alt="yt" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="m-2 p-2"
          >
            <Image src={"/assets/fb.png"} width={40} height={40} alt="yt" />
          </a>
        </div>
        <div className="opacity-50">
          <Devider />
        </div>
        <h4 className="p-5 opacity-70">
          جميع حقوق الطبع والنشر محفوظة{" "}
          <span className="text-[#F9C500]">@</span>2024
        </h4>
        <h4 className="flex justify-center opacity-60">
          Developed by <span className="text-[#F9C500]">&nbsp;&nbsp;{">"}</span>
          &nbsp;&nbsp;
          <a
            href="https://omarmhasan.bio.link/"
            target="_blank"
            className="underline"
          >
            Omar
          </a>
          <span className="text-[#F9C500]">&nbsp;&nbsp;&</span>
          &nbsp;&nbsp;
          <a
            href="https://github.com/ibrahim317"
            target="_blank"
            className="underline"
          >
            Ibrahim
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
