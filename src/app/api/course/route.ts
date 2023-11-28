import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const course = await prisma.course.findMany();
    return NextResponse.json(course, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
