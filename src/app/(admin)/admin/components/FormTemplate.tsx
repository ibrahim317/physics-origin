"use client";
import React from "react";
import {
  CourseForm,
  UserForm,
  LecureForm,
  SectionForm,
  FileForm,
  VideoForm,
  QuizForm,
  QuestionForm,
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
      return <FileForm entity={entity} courseID={options} />;
    case "video":
      return <VideoForm entity={entity} courseID={options} />;
    case "quiz":
      return <QuizForm entity={entity} courseID={options} />;
    case "quistion":
      return <QuestionForm entity={entity} quizId={options} />;
    default:
      break;
  }
};

export default FormTemplate;
