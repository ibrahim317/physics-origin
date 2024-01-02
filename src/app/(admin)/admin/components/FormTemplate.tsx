"use client";
import React from "react";
import {
  CourseForm,
  UserForm,
  LecureForm,
  SectionForm,
  FileForm,
  VideoForm,
} from "./forms/Exports";

type ComponentProps = {
  entityType: string;
  entity?: any;
  options?: any;
};

const FormTemplate = ({ entityType, options, entity }: ComponentProps) => {
  switch (entityType) {
    case "course":
      return <CourseForm entity={entity} />;
    case "user":
      return <UserForm entity={entity} />;
    case "lecture":
      return <LecureForm entity={entity} />;
    case "section":
      return <SectionForm entity={entity} courseid={options} />;
    case "file":
      return <FileForm entity={entity} />;
    case "video":
      return <VideoForm entity={entity} />;
    default:
      break;
  }
};

export default FormTemplate;
