import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Unique Collection",
  description: "Premium Men's Wear-Ready-Made&Custom Stitches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        {children}
      </body>
    </html>
  );
}
