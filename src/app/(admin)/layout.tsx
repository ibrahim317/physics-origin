export const metadata = {
  title: "Physics Origin",
  description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};

interface RootProps {
  children: React.ReactNode;
}
export default async function RootLayout({ children }: RootProps) {
  return (
    <main className="relative flex min-h-screen bg-black ">{children} </main>
  );
}
