import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow pt-24 pb-12 max-w-7xl mx-auto px-4 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
