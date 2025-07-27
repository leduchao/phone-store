import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { AuthProvider } from "@/context/auth.context";

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
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 min-w-[400px]">
        {/* <AuthProvider> */}
        <Header />
        <main className="flex-grow pt-17 px-3.5 md:px-20 lg:px-32 w-full">
          <div className="py-5">{children}</div>
        </main>
        <Footer />
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
