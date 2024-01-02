import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(`From here is :`, res);
  switch (res.entity) {
    case "course":
      try {
        const DeletedCourse = await prisma.course.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(DeletedCourse, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }

    case "lecture":
      try {
        const DeletedLecture = await prisma.lecture.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(DeletedLecture, { status: 201 });
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
        const DeletedSection = await prisma.user.delete({
          where: {
            id: res.id,
          },
        });
        return NextResponse.json(DeletedSection, { status: 201 });
      } catch (err) {
        return NextResponse.json(err, { status: 400 });
      }
  }
}
