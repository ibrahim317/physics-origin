"use client";
import React from "react";
import {
  CourseFormSchema,
  LectureFormSchema,
  SectionFormSchema,
  UserFormSchema,
} from "../lib/FormSchemas";
import { CourseForm, UserForm, LecureForm, SectionForm } from "./forms/Exports";

type ComponentProps = {
  entityType: string;
  entity: any;
};

const FormTamplate = ({ entityType, entity}: ComponentProps) => {
  switch (entityType) {
    case "course":
      return <CourseForm Schema={CourseFormSchema} entity={entity}/>;
    case "user":
      return <UserForm Schema={UserFormSchema} />;
    case "lecture":
      return <LecureForm Schema={LectureFormSchema} />;
    case "section":
      return <SectionForm Schema={SectionFormSchema} />;
    default:
      break;
  }
};

export default FormTamplate;
