import { Almarai } from "next/font/google";
import "@/src/styles/globals.css";
import SessionProvider from "@/src/components/Provider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";

export const metadata = {
	title: "Physics Origin",
	description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};
const inter = Almarai({ subsets: ["arabic"], weight: "400" });

interface RootProps {
	children: React.ReactNode;
}
export default async function RootLayout({ children }: RootProps) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<body className={inter.className + " min-h-screen"}>
				<SessionProvider session={session}>
					<Toaster position="top-right" reverseOrder />
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
