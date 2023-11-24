import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  try {
    const newUser = await prisma.user.create({
      data: {
        id: res.email,
        first_name: res.name,
        email: res.email,
        last_name: res.last_name,
        parent_phone: res.parent_phone,
        phone: res.phone,
        pass: res.password,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
