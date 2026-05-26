"use client";

import { type Product, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ productId: product.id, name: product.name, price: product.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        className="flex h-56 items-center justify-center bg-stone-50 p-6 transition group-hover:bg-stone-100"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-stone-200/60 text-3xl text-stone-400">
          {product.category === "living-room" && "🛋️"}
          {product.category === "dining" && "🍽️"}
          {product.category === "office" && "💺"}
          {product.category === "bedroom" && "🛏️"}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-base font-semibold text-stone-900 transition group-hover:text-amber-700">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm text-stone-500">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-stone-900">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            data-testid={`add-to-cart-${product.id}`}
            className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700 active:scale-95 disabled:opacity-60"
            disabled={added}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
