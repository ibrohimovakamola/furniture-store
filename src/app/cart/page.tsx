"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import Link from "next/link";

export default function CartPage() {
  const { cart, total, remove, setQuantity, clear } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-stone-900">Your Cart</h1>
        <p className="mt-4 text-stone-500">
          Your cart is empty. Browse our collection to find something you love.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-900">Your Cart</h1>
        <button
          onClick={clear}
          className="text-sm font-medium text-stone-400 transition hover:text-red-600"
        >
          Clear All
        </button>
      </div>

      <ul className="mt-8 divide-y divide-stone-200">
        {cart.items.map((item) => (
          <li key={item.productId} className="flex items-center gap-6 py-6">
            <div className="flex-1">
              <h3 className="font-semibold text-stone-900">{item.name}</h3>
              <p className="text-sm text-stone-500">
                {formatPrice(item.price)} each
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setQuantity(item.productId, item.quantity - 1)
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-300 text-stone-600 transition hover:bg-stone-100"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <span
                className="w-8 text-center font-medium text-stone-900"
                data-testid={`qty-${item.productId}`}
              >
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  setQuantity(item.productId, item.quantity + 1)
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-300 text-stone-600 transition hover:bg-stone-100"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <p className="w-24 text-right font-bold text-stone-900">
              {formatPrice(item.price * item.quantity)}
            </p>

            <button
              onClick={() => remove(item.productId)}
              className="text-stone-400 transition hover:text-red-600"
              aria-label="Remove item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-8">
        <span className="text-lg font-medium text-stone-600">Total</span>
        <span className="text-2xl font-bold text-stone-900">
          {formatPrice(total)}
        </span>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="flex-1 rounded-xl border border-stone-300 py-3.5 text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
        >
          Continue Shopping
        </Link>
        <button className="flex-1 rounded-xl bg-stone-900 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-700">
          Checkout
        </button>
      </div>
    </div>
  );
}
