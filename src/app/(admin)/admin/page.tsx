import { get_user_by_email } from "@/src/lib/db/get_user";
import { getServerSession } from "next-auth";
import React from "react";
import NotFound from "@/src/app/not-found";

const page = async () => {
	// Check if the user is logged in
	const session = await getServerSession();
	if (!session) return <NotFound />;
	// Check if the user is have access
	const user = await get_user_by_email(session.user?.email);
	if (user?.isAdmin === false) return <NotFound />;

	return (
		<>
			<h1>Admin</h1>
		</>
	);
};

export default page;
