import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import Devider from "./Devider";

const Footer = () => {
  return (
    <div
      className="h-60 w-full flex justify-center items-center"
      style={{ backgroundColor: `#081022` }}
    >
      <div className="h-4/5">
        <div className="flex justify-center">
          <a href="https://www.youtube.com/@physicsorigin9192" target="_blank">
            <YouTubeIcon className="text-[#F9C500] text-[50px] m-5" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon className="text-[#F9C500] text-[50px] m-5" />
          </a>
        </div>
        <Devider />
        <h4 className="p-5 opacity-70">
          جميع حقوق الطبع والنشر محفوظة{" "}
          <span className="text-[#F9C500]">@</span>2024
        </h4>
      </div>
    </div>
  );
};

export default Footer;
