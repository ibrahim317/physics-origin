import type { Metadata } from "next";
import "./globals.css";

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
      <body className="smooth darkmode dark">{children}</body>
    </html>
  );
}
