import React from "react";
import { CourseForm, UserForm, LectureForm, SectionForm } from "./Forms";
type ComponentProps = {
  entityType: string;
  entity: any;
};

const FormTamplate = ({ entityType, entity }: ComponentProps) => {
  switch (entityType) {
    case "course":
      return <CourseForm course={entity} />;
    case "user":
      return <UserForm user={entity} />;
    case "lecture":
      return <LectureForm lecture={entity} />;
    case "section":
      return <SectionForm section={entity} />;
    default:
      break;
  }
};

export default FormTamplate;
