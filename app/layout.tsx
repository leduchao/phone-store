import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body className="">
        <header style={{ padding: 16, background: "#f2f2f2" }}>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main style={{ padding: 16 }}>{children}</main>

        <footer style={{ textAlign: "center" }}>© 2025 MyPhoneStore</footer>
      </body>
    </html>
  );
}
