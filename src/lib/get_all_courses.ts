import axios from "axios";
const get_all_courses = async () => {
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
export default get_all_courses;
