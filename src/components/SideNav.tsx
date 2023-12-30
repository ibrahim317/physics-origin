"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MyDrawer } from "./Drawer";

const SideNav = () => {
  return (
    <div>
      <div className="md:hidden">
        <MyDrawer></MyDrawer>
      </div>
      <div className="fixed min-h-screen min-w-max bg-black p-4 max-md:hidden">
        <div className="flex h-full flex-col gap-24 ">
          <h2 className="text-xl">Side Nav</h2>
          <div className="flex flex-col gap-12">
            <Link href={"/admin/courses"}>
              <Button className="w-full" variant={"outline"}>
                Courses
              </Button>
            </Link>
            <Link href={"/admin/sections"}>
              <Button className="w-full" variant={"outline"}>
                Sections
              </Button>
            </Link>{" "}
            <Link href={"/admin/lectures"}>
              <Button className="w-full" variant={"outline"}>
                Letures
              </Button>
            </Link>
            <Link href={"/admin/users"}>
              <Button variant={"outline"} className="w-full">
                Users
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-full min-w-[120px] "></div>
    </div>
  );
};

export default SideNav;
