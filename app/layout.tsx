import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAVIPCO - Công ty TNHH Kỹ Nghệ Lâm Việt Phát",
  description: "Chuyên thi công chiếu sáng, tín hiệu giao thông, camera an ninh & năng lượng mặt trời",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}