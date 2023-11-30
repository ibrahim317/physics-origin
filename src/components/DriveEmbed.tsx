import React from 'react';

interface DriveEmbedProps {
  fileUrl: string;
}

const DriveEmbed = ({ fileUrl }, props: string) => {
  const getIdFromUrl = (url: string): string | null => {
    const match = url.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const embedUrl = `https://drive.google.com/file/d/${getIdFromUrl(fileUrl)}/preview`;

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
