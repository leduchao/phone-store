import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phone Store",
  description: "The best place to buy your phone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
