import axios from "axios";
const getSection = async (id: number) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  try {
    const sections = await instance.get("/api/section", {
      params: { id: id },
    });
    return await sections.data;
  } catch (err) {
    throw err;
  }
};
export default getSection;
