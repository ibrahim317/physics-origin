import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const CreatedSection = await prisma.section.create({
      data: res,
    });
    return NextResponse.json(CreatedSection, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
