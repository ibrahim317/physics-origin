import axios from "axios";
import { z, ZodError } from "zod";
import { toast } from "react-hot-toast";
interface user {
  id: number;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  repassword: string;
}
export const vaild = async (data: user) => {
  const userSchema = z.object({
    name: z.string(),
    last_name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    password: z.string(),
  });

  try {
    userSchema.parse(data);

    try {
      await axios.post("/api/register", data);
    } catch (error) {
      toast.error("Email already exist");
      return;
    }
    if (data.password != data.repassword) {
      toast.error("Password dosen't match");
      return;
    }
  } catch (ZodError) {
    console.log(ZodError);
  }
};
