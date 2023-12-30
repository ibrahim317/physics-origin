import CourseForm from "./CourseForm";
import SectionForm from "./SectionForm";
import LecureForm from "./LecureForm";
import UserForm from "./UserForm";
export { CourseForm, SectionForm, LecureForm, UserForm };
export type FormProps<T> = {
  Schema: T;
};
