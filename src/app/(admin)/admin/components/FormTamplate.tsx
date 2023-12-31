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

const FormTemplate = ({ entityType, entity}: ComponentProps) => {
  switch (entityType) {
    case "course":
      return <CourseForm entity={entity}/>;
    case "user":
      return <UserForm entity={entity}/>;
    case "lecture":
      return <LecureForm entity={entity}/>;
    case "section":
      return <SectionForm entity={entity}/>;
    default:
      break;
  }
};

export default FormTemplate;
