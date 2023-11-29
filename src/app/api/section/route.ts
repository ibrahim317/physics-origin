import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.getAll("id")[0];
  try {
    const sections = await prisma.section.findMany({
      where: { course: id },
    });
    return NextResponse.json(sections, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
