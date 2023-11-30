import React from "react";

<<<<<<< HEAD
interface DriveEmbedProps {
  fileUrl: string;
}

const DriveEmbed = ({ fileUrl }:any, props: string) => {
=======
const DriveEmbed = (props: any) => {
>>>>>>> a09f5b712203225f6958ad7dbce65bdf1d29abde
  const getIdFromUrl = (url: string): string | null => {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const embedUrl = `https://drive.google.com/file/d/${getIdFromUrl(
    props.fileUrl
  )}/preview`;

  return (
    <div>
      <iframe
        title="Google Drive Embed"
        src={embedUrl}
        width="600"
        height="400"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DriveEmbed;
