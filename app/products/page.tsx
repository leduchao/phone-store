"use client";

import { useEffect } from "react";

export default function Products() {
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    console.log("Products data:", await data.json());
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="">Products Page</div>;
}
