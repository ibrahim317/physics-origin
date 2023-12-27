import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/footer";

export const metadata = {
	title: "Physics Origin",
	description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};
const classnames = "  bg-[#232935] flex flex-col min-h-screen ";

interface RootProps {
	children: React.ReactNode;
}
export default async function RootLayout({ children }: RootProps) {
	return (
		<main className={classnames}>
			<NavBar />
			<div className="flex-grow">{children}</div>
			<Footer />
		</main>
	);
}
