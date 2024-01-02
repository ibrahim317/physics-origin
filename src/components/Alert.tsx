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
      {props.delete ? (
        <AlertDialogTrigger
          type="button"
          className={
            props.className
              ? props.className
              : "m-10 rounded-md   bg-destructive bg-opacity-50 px-16 py-5 text-2xl hover:opacity-60"
          }
        >
          Delete
        </AlertDialogTrigger>
      ) : (
        <></>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.heading}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
          {/* This action cannot be undone. This will permanently delete your
						account and remove your data from our servers. */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={props.callback}>
            {props.GoTo ? (
              <Link
                href={props.GoTo}
                className="h-full w-full overflow-visible"
              >
                Go to {props.GoTo}
              </Link>
            ) : (
              props.actionText
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
