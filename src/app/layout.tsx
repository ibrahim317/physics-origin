import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";

const inter = Alexandria({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Physics Origin",
  description: "منصة احمد يوسف لتدريش منهج الفيزياء للصفوف الثانوية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
