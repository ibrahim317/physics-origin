import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physics Origin",
  description: "I love potatoes (Don't you dare delete that)",
};
const inter = Almarai({ subsets: ["arabic"], weight: "400" });
const classnames = inter.className + " darkmode smooth dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classnames}>{children}</body>
    </html>
  );
}
