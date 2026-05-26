import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Curated Furniture
        </h1>
        <p className="mt-3 text-lg text-stone-500">
          Beautiful pieces designed for modern living.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
