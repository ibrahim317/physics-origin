import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const newCourse = await prisma.course.create({
      data: {
        name: res.name,
        des: res.des,
        price: res.price,
        thumbnail: res.thumbnail,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
