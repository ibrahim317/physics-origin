import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const current = await prisma.current_Course.findFirst();
    return NextResponse.json(current, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  const a = res.toString() as string;

  try {
    await prisma.current_Course.deleteMany({});
    await prisma.current_Course.create({
      data: {
        id: a,
      },
    });
    return NextResponse.json({ status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 403 });
  }
}
