import CourseForm from "./CourseForm";
import SectionForm from "./SectionForm";
import LecureForm from "./LecureForm";
import UserForm from "./UserForm";
import VideoForm from "./sectionForms/VideoForm";
import FileForm from "./sectionForms/FileForm";
export { CourseForm, SectionForm, LecureForm, UserForm, VideoForm, FileForm };
export type FormProps<T> = {
  Schema: T;
};
