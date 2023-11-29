import axios from "axios";
const getCourse = async () => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });

  try {
    const courses = await instance.get("/api/course");
    return await courses.data;
  } catch (err) {
    throw err;
  }
};
export default getCourse;
