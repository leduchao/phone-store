"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">
          Trang bạn tìm không tồn tại
        </h2>
        <p className="mb-6 max-w-md">
          Có thể đường dẫn sai hoặc sản phẩm không còn tồn tại trên hệ thống của
          chúng tôi.
        </p>
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Về trang chủ
        </Link>
      </main>
    </div>
  );
}
