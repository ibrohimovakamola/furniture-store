"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ productId: product.id, name: product.name, price: product.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleAdd}
      data-testid="add-to-cart"
      className="mt-4 w-full rounded-xl bg-stone-900 py-3.5 text-base font-semibold text-white transition hover:bg-amber-700 active:scale-[0.98] disabled:opacity-60"
      disabled={added}
    >
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  );
}
