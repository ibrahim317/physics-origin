import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "@/src/styles/globals.css";
import SessionProvider from "../../components/Provider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import NavBar from "../../components/NavBar";
import get_user from "@/src/lib/get_user";

export const metadata: Metadata = {
  title: "Physics Origin",
  description: "I love potatoes (Don't you dare delete that)",
};
const inter = Almarai({ subsets: ["arabic"], weight: "400" });
const classnames = inter.className + "  bg-[#232935] ";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const user = await get_user(searchParams.id);

  // if (session?.isAdmin) {
  //   return(
  //     <>
  //       <h1>gfsssssssssssssssshtr trhrt ht hyt hyt htyhyt htyh t</h1>
  //     </>
  //   )
  // }

  return (
    <html lang="en">
      <body className={classnames}>
        <SessionProvider session={session}>
          
          {/*///// This is what keeps the session /////*/}
          <Toaster position="top-right" reverseOrder />
          <div className="darkmode loading-bar"></div>
          <NavBar />
          {children}

        </SessionProvider>
      </body>
    </html>
  );
}
