import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-50">
      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <div className="flex mb-4 ">
          <span className="text-4xl font-bold pr-5 border-r-5 border-neutral-950">
            404
          </span>
          <span className="text-4xl font-bold pl-4">Page not found</span>
        </div>
        <div className=" max-w-lg">
          Sorry we couldn&apos;t find this page. But don&apos;t worry, you can
          find plenty of other things on our{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            homepage
          </Link>
        </div>
      </main>
    </div>
  );
}
