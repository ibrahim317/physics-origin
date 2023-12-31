"use client";
import React from "react";
import { FormProps } from "./Exports";
import { LectureFormSchemaType } from "./types/formsTypes";
import { LectureType } from "@/src/types/global";

interface LectureFormProps {
  entity: LectureType;
}
const LecureForm = ({ entity }: LectureFormProps) => {
  return <div>LecureForm</div>;
};

export default LecureForm;
