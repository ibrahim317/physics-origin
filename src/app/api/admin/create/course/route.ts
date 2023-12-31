import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  let published = false;
  if (res.published === "true") published = true;
  try {
    const CreatedCourse = await prisma.course.create({
      data: {
        name: res.name,
        des: res.des,
        price: Number(res.price),
        thumbnail: res.thumbnail,
        published,
      },
    });
    return NextResponse.json(CreatedCourse, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
