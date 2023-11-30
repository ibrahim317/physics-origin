import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const email = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
