import * as React from "react";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";

export function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="ml-5 mt-5">
          Open Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Navagation Menu</DrawerTitle>
            <DrawerDescription>Go to diffrante Dashboard</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col gap-5">
              <Link href={"/admin/courses"}>
                <Button className="w-full">Courses</Button>
              </Link>{" "}
              <Link href={"/admin/sections"}>
                <Button className="w-full">Sections</Button>
              </Link>
              <Link href={"/admin/lectures"}>
                <Button className="w-full">Letures</Button>
              </Link>
              <Link href={"/admin/users"}>
                <Button className="w-full">Users</Button>
              </Link>
            </div>
            <div className="mt-3 h-[120px]"></div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
