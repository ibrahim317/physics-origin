import axios from "axios";
const get_section_by_id = async (id: number) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  try {
    const sections = await instance.get("/api/scontent", {
      params: { id: id },
    });
    return await sections.data;
  } catch (err) {
    throw err;
  }
};
export default get_section_by_id;
