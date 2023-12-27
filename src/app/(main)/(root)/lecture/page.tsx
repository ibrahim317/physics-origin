import React from "react";
import get_section_by_id from "@/src/lib/db/get_section_by_id";
import { get_user_by_email } from "@/src/lib/db/get_user";
import { getServerSession } from "next-auth";
import NotFound from "@/src/app/not-found";
import Video from "./components/Video";
import { SectionType } from "@/src/types/global";

interface params {
	searchParams: { id: string };
}
const page = async ({ searchParams }: params) => {
	try {
		const session = await getServerSession();
		const section = await get_section_by_id(Number(searchParams.id));
		const user = await get_user_by_email(session?.user?.email);
		const userHaveAccess = user?.courses.find(
			(id: any) => id === section?.course[0].id
		);
		if (!userHaveAccess || !session) {
			return <NotFound />;
		}
		return <Video section={section as SectionType} />;
	} catch (err) {
		return <NotFound />;
	}
};

export default page;
