import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physics Origin",
  description: "I love potatoes (Don't you dare delete that)",
};
const inter = Almarai({ subsets: ["arabic"], weight: "400" });

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
