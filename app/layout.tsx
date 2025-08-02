import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { AuthProvider } from "@/context/auth.context";

const lexend = Lexend({
  subsets: ["vietnamese"],
});

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
    <html lang="en" className={lexend.className}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 min-w-[400px]">
        {/* <AuthProvider> */}
        <Header />
        <main className="flex-grow pt-17 w-full">
          <div className="py-5">{children}</div>
        </main>
        <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
