import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "@/src/styles/globals.css";
import SessionProvider from "@/src/components/Provider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import NavBar from "@/src/components/NavBar";
import Footer from "../components/footer";

export const metadata = {
  title: "Physics Origin",
  description: "منصة م/أحمد يوسف لتدريس الفيزياء",
};
const inter = Almarai({ subsets: ["arabic"], weight: "400" });
const classnames =
  inter.className + "  bg-[#232935] flex flex-col min-h-screen ";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={classnames}>
        <SessionProvider session={session}>
          {/*///// This is what keeps the session /////*/}
          <Toaster position="top-right" reverseOrder />
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
