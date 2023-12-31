import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const newUser = await prisma.user.create({
      data: {
        name: res.name,
        email: res.email,
        last_name: res.last_name,
        parent_phone: res.parent_phone,
        phone: res.phone,
        pass: res.password,
        isAdmin: false,
        courses: [],
      },
    });
    const progress = await prisma.progress.create({
      data: {
        userId: newUser.id,
        passed_quizzes: [],
        quizzes_grades: {},
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
prisma.$disconnect();
