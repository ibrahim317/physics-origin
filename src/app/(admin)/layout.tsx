export const metadata = {
  title: "Physics Origin",
  description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};
import SideNav from "@/src/components/SideNav";
import "@/src/styles/admin.css";

interface RootProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: RootProps) {
  return (
    <main className="flex max-md:flex-col">
      <SideNav />
      {children}
    </main>
  );
}
