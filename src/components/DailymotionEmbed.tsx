import React from "react";
import get_dailymotion_content from "@/src/lib/db/get/get_dailymotion_content";

const DailymotionEmbed = async ({ id }: { id: number }) => {
  const Videoid = (await get_dailymotion_content(id)) ?? "";
  const link = `https://geo.dailymotion.com/player/xmztx.html?video=${Videoid}`;
  return (
    <iframe
      src={link}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      width="640"
      height="360"
      className="h-[70vh] w-[80vw] max-lg:h-[70vw] max-lg:w-[80vw]"
    ></iframe>
  );
};

export default DailymotionEmbed;
