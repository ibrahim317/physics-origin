

export const metadata = {
  title: 'Ahmed Youssef',
  description: 'منصة احمد يوسف لتدريس منهج الفيزياء للصفوف الثانوية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  )
}
