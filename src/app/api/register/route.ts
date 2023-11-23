import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: res.name,
      email: res.email,
      last_name: res.last_name,
      phone: res.phone,
      password: res.password,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
