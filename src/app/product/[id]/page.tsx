import { notFound } from "next/navigation";
import { getProduct, products, formatPrice } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl bg-stone-100 p-12">
          <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-stone-200/60 text-6xl text-stone-400">
            {product.category === "living-room" && "🛋️"}
            {product.category === "dining" && "🍽️"}
            {product.category === "office" && "💺"}
            {product.category === "bedroom" && "🛏️"}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-stone-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-stone-600">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-stone-900">{product.name}</h1>
          <p className="text-stone-500">{product.description}</p>
          <p className="text-2xl font-bold text-stone-900">
            {formatPrice(product.price)}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
