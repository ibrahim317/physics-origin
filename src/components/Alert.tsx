import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/components/ui/alert-dialog";
const Alert = (props: any) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{props.Button}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.heading}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
          {/* This action cannot be undone. This will permanently delete your
						account and remove your data from our servers. */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <Link href={props.GoTo} className="h-full w-full overflow-visible">
              Go to {props.GoTo}
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
