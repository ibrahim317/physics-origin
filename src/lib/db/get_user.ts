// import axios from "axios";
import prisma from "@/src/lib/PrismaClient";

const get_user_by_email = async (email: null | undefined | string) => {
	try {
		const user = await prisma.user.findFirst({
			where: { email: email?.toString() },
		});
		return user;
	} catch (err) {
		throw err;
	}
};
const get_user_with_progress = async (email: null | undefined | string) => {
	try {
		return await prisma.user.findUnique({
			where: {
				email: email?.toString(),
			},
			include: { progress: true },
		});
	} catch (err) {
		throw err;
	}
};

prisma.$disconnect();
export { get_user_by_email, get_user_with_progress };
