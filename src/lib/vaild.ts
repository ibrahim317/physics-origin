import axios from "axios";
import { z, ZodError } from "zod";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
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
    phone: z.string().min(11, "رقم الهاتف غير صحيح").max(11),
    father_phone: z.string().min(11, "رقم هاتف ولي الأمر غير صحيح").max(11),
    email: z.string().email("البريد الإكتروني غير مناسب"),
    password: z.string().min(8, "passowrd must be more than 8 characters"),
  });

  const vaildtaion = userSchema.safeParse(data);
  if (!vaildtaion.success) {
    toast.error(vaildtaion.error.errors[0].message);
    throw new Error();
  }
  if (data.password === data.repassword) {
    try {
      await axios.post("/api/register", data);
    } catch (error: any) {
      toast.error(error.message);
      throw new Error(error);
    }
  } else {
    toast.error("Password dosen't match");
    throw new Error();
  }
};
