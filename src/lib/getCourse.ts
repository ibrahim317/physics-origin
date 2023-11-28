import axios from "axios";
const getCourse = async (url: string) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  const URL = "/api/" + url;

  try {
    const courses = await instance.get(URL);
    return await courses.data;
  } catch (err) {
    throw err;
  }
};
export default getCourse;
