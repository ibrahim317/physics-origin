import axios from "axios";
const getId = async (url: string) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  try {
    const path = await instance.get("/api/current_course");
    return path.data.id;
  } catch (error) {
    throw error;
  }
};
export default getId;
