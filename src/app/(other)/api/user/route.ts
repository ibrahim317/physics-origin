import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.getAll("email");
  try {
    const user = await prisma.user.findFirst({
      where: { email: email[0] },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
