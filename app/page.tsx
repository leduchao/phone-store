"use client";

// import RequireSignIn from "@/components/require-sign-in";
// import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Chào mừng đến với shop!</h1>
      <p className="text-gray-600">Khám phá các sản phẩm hot nhất hiện nay!</p>
      {/* <RequireSignIn
        onContinue={() => console.log("User đã đăng nhập, tiếp tục hành động")}
      >
        <Button>Mua hàng</Button>
      </RequireSignIn> */}
    </div>
  );
}
