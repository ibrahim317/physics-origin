import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res);
  switch (res.entity) {
    case "course":
      try {
        const UpdatedSection = await prisma.course.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(UpdatedSection, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }

    case "lecture":
      try {
        const UpdatedSection = await prisma.lecture.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(UpdatedSection, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }

    case "section":
      try {
        const UpdatedSection = await prisma.section.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(UpdatedSection, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }

    case "user":
      try {
        const UpdatedSection = await prisma.user.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(UpdatedSection, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }
  }
}
