import {
  CourseFormSchema,
  LectureFormSchema,
  UserFormSchema,
  SectionFormSchema,
} from "../../../lib/FormSchemas";

export type SchemaType =
  | typeof CourseFormSchema
  | typeof LectureFormSchema
  | typeof UserFormSchema
  | typeof SectionFormSchema;
export type LectureFormSchemaType = typeof LectureFormSchema;
export type UserFormSchemaType = typeof UserFormSchema;
export type SectionFormSchemaType = typeof SectionFormSchema;
export type CourseFormSchemaType = typeof CourseFormSchema;
