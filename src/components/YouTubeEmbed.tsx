"use client";
import React, { useState, useEffect, useRef } from "react";

const YouTubeEmbed = ({ vidlink }: any) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const embedVideo = (youtubeUrl: string) => {
    const extractedVideoId = getParameterByName("v", youtubeUrl);

    setVideoId(extractedVideoId);
  };

  const getParameterByName = (name: string, url: string): string | null => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  useEffect(() => {
    const YouTubeUrl = vidlink;

    embedVideo(YouTubeUrl);
  }, [vidlink]);

  return (
    <div>
      <div id="youtubePlayer">
        {videoId && (
          <iframe
            className="min-[1000px]:w-[857px] min-[1000px]:h-[482px]   min-[500px]:w-[600px] min-[500px]:h-[335px] max-[720px]:w-[400]  border-2 border-[#F9C500] rounded-[25px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
