import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const CreatedCourse = await prisma.course.create({
      data: res,
    });
    return NextResponse.json(CreatedCourse, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
