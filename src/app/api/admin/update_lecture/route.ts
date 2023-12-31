import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  
  try {
    const UpdatedLecture = await prisma.lecture.update({
      where: {
        id: res.id,
      },
      data: {
        name: res.name,
        des: res.des,
      },
    });
    return NextResponse.json(UpdatedLecture, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
