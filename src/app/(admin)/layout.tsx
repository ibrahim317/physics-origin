export const metadata = {
	title: "Physics Origin",
	description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};

interface RootProps {
	children: React.ReactNode;
}
export default async function RootLayout({ children }: RootProps) {
	return <main className="flex-grow bg-black">{children}</main>;
}
