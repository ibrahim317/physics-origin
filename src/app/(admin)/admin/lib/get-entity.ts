import get_course_by_id from "@/src/lib/db/get/get_by/get_course_by_id";
import get_section_by_id from "@/src/lib/db/get/get_by/get_section_by_id";
import get_lecture_by_id from "@/src/lib/db/get/get_by/get_lecture_by_id";
import { get_user_by_id } from "@/src/lib/db/get/get_by/get_user";

export const getEntity = async (entity: string, entity_id: number) => {
  switch (entity) {
    case "course":
      return await get_course_by_id(entity_id);

    case "section":
      return await get_section_by_id(entity_id);

    case "lecture":
      return await get_lecture_by_id(entity_id);

    case "user":
      return await get_user_by_id(entity_id);
  }
};
