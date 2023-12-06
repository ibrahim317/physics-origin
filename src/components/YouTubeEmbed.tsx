"use client";
import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
const YouTubeEmbed = ({ vidlink }: any) => {
  const [videoId, setVideoId] = useState<string | undefined>();

  const embedVideo = (youtubeUrl: string) => {
    const extractedVideoId = getParameterByName("v", youtubeUrl);

    setVideoId(extractedVideoId);
  };

  const getParameterByName = (
    name: string,
    url: string
  ): string | undefined => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return undefined;
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
            className="min-h-[400px] min-w-[calc(330px*0.8)] w-[calc(80vw)] md:min-h-[600px] mb-10 outline-none max-w-[1200px] border-2 border-[#F9C500] rounded-[25px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
