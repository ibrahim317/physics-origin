"use client";
import React, { useState, useEffect } from "react";

const YouTubeEmbed = ({ vidlink }: any) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const embedVideo = (youtubeUrl: string) => {
    // Get the video_id from the URL
    const extractedVideoId = getParameterByName("v", youtubeUrl);

    // Set the state with the video ID
    setVideoId(extractedVideoId);
  };

  // Function to get URL parameters
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
    const YouTubeUrl = vidlink; // ibrahim job :)

    // Embed the video when the component mounts
    embedVideo(YouTubeUrl);
  }, [vidlink]); // Empty dependency array ensures the effect runs only once on mount
  // AIzaSyBm5mOkLCuiEwtrJ2NB383pu2H3jJu7rZE

  return (
    <div>
      <div id="youtubePlayer">
        {videoId && (
          <iframe
            className="min-[1000px]:w-[857px] min-[1000px]:h-[482px]   min-[500px]:w-[600px] min-[500px]:h-[335px] max-[720px]:w-[400]  border-2 border-[#F9C500] rounded-[25px]"
            // width="857"
            // height="482"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
