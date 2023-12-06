import { PrismaClient } from "@/prisma/generated/client";
import get_user_by_email from "@/src/lib/get_user_by_email";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const res = await request.json();
  const user = await get_user_by_email(res.customer_details.email);

  if (res.payment_result.response_status == "A") {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: Number(user?.id),
        },
        data: {
          courses: {
            push: res.cart_id,
          },
        },
      });
      return NextResponse.json(updatedUser, { status: 200 });
    } catch (err) {
      return NextResponse.json(err, { status: 400 });
    }
  }
}
