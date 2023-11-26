import React from "react";
import axios from "axios";
import { headers } from "next/headers";

const page = async () => {
  const getLastSegmentFromUrl = (url: string): string | undefined => {
    // Remove trailing slashes
    const trimmedUrl = url.replace(/\/+$/, "");

    // Split the URL by '/'
    const segments = trimmedUrl.split("/");

    // Get the last non-empty segment
    const lastSegment = segments.pop();

    return lastSegment || undefined;
  };
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const id = getLastSegmentFromUrl(fullUrl);
  console.log(id);
  return (
    <section className="p-8 rtl">
      <h2 className="font-extrabold text-7xl max-md:text-5xl">الكورس الثالث</h2>
    </section>
  );
};

export default page;
