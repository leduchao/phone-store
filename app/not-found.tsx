"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        Trang bạn tìm không tồn tại
      </h2>
      <p className="mb-6 text-center max-w-md">
        Có thể đường dẫn sai hoặc sản phẩm không còn tồn tại trên hệ thống của
        chúng tôi.
      </p>
      <Link href="/">
        <p className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Về trang chủ
        </p>
      </Link>
    </div>
  );
}
