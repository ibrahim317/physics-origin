import { PrismaClient } from "@/prisma/generated/client";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const data = request.nextUrl.searchParams;
  const session = await getServerSession();
  const user = await get_user_by_email(session?.user?.email);
  const buying = user?.buying ?? "";
  if (data.getAll("success")[0] == "true") {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: user?.id,
        },
        data: {
          buying: "",
          courses: {
            push: buying,
          },
        },
      });
    } catch (err) {
      return NextResponse.json(err, { status: 400 });
    }
  } else {
  }

  redirect(`/course?id=${buying}`);
}
