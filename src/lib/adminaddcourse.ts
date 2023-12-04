import axios from "axios";
import toast from "react-hot-toast";

interface course {
    name: string;
    des: string;
}

export const adminaddcourse = async (data: course) => {

    try {
        await axios.post("/api/adminaddcourse", data);
      } catch (error: any) {
        toast.error("لقد حصل خطأ, الرجاء إعادة المحاولة");
        throw new Error(error);
      }

}
  