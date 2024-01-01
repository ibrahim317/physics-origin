import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();

  try {
    const UpdatedSection = await prisma.section.update({
      where: {
        id: res.id,
      },
      data: {
        name: res.name,
        tag: res.tag,
      },
    });
    return NextResponse.json(UpdatedSection, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
