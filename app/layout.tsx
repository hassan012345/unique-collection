import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unique Collection - Premium Men's & Women's Wear | Peshawar",
  description: "Peshawar's premier destination for custom and ready-made menswear. Shop Shalwar Kameez, Waistcoats, Formal Wear and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
