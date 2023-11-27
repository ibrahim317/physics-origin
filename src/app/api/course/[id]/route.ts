import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";
import { getLastSegmentFromUrl } from "@/src/lib/lastWord";
export async function GET(request: NextRequest) {
  const a = getLastSegmentFromUrl(request.url);

  try {
    const course = await prisma.course.findFirst({
      where: { id: a },
    });
    return NextResponse.json(course, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 401 });
  }
}
