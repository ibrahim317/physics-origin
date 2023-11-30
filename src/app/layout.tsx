export const metadata = {
  title: "منصة احمد يوسف",
  description: "منصة م/احمد يوسف لتدريس الفيزياء",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
