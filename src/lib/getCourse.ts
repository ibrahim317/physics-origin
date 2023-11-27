import axios from "axios";
const getCourse = async (url: string) => {
  const URL = "/api" + url;
  try {
    if (url.length > 0) {
      const courses = await axios.get(`http://localhost:3000${URL}`);
      return await courses.data;
    } else {
      const courses = await axios.get(`http://localhost:3000${URL}`);
      return await courses.data;
    }
  } catch (err) {
    throw err;
  }
};
export default getCourse;
