import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: res.user.id,
      },
      data: {
        buying: res.course.id.toString(),
      },
    });

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
