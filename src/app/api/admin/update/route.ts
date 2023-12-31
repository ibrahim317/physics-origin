import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const UpdatedCourse = await prisma.course.update({
      where: {
        id: res.id,
      },
      data: {
        name: res.name,
        des: res.des,
        price: Number(res.price),
        thumbnail: res.thumbnail,
      },
    });
    return NextResponse.json(UpdatedCourse, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
