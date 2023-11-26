export const getLastSegmentFromUrl = (url: string): string | null => {
  // Remove trailing slashes
  const trimmedUrl = url.replace(/\/+$/, "");

  // Split the URL by '/'
  const segments = trimmedUrl.split("/");

  // Get the last non-empty segment
  const lastSegment = segments.pop();

  return lastSegment || null;
};
