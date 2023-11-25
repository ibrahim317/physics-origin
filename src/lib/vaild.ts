// register thing //
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
    phone: z
      .string()
      .min(11, "رقم الهاتف غير صحيح")
      .max(11, "رقم الهاتف غير صحيح"),
    parent_phone: z.string().min(11, "رقم هاتف ولي الأمر غير صحيح").max(11),
    email: z.string().email("البريد الإكتروني غير مناسب"),
    password: z.string().min(8, "كلمة المرور يجب ألا تقل عن 8 احرف"),
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
    toast.error("كلمة المرور لا تطابق التأكيد");
    throw new Error();
  }
};
