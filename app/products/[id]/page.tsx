"use client";

import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  return <div className="">Product Details Page for Product ID: {id}</div>;
}
