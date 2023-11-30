import axios from "axios";
const get_user = async (id: number) => {
  const instance = axios.create({
    baseURL: "http://" + process.env.NEXT_PUBLIC_VERCEL_URL,
  });
  try {
    const users = await instance.get("/api/scontent", {
      params: { id: id },
    });
    return await users.data;
  } catch (err) {
    throw err;
  }
};
export default get_user;
