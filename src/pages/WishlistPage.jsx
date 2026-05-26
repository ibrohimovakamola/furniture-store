import { ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import Rating from '../components/common/Rating.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { products } from '../data/products.js';
import { formatCurrency } from '../utils/formatters.js';

export default function WishlistPage() {
  const { addToCart, toggleWishlist, wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <EmptyState
          title="Your wishlist is ready for inspiration"
          description="Save your favorite sofas, beds, lighting, and decor while planning the perfect room."
          actionLabel="Browse collection"
          actionTo="/products"
        />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-500">
        Wishlist
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-stone-950 dark:text-white md:text-6xl">
        Saved for later
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => {
          const fullProduct = products.find((product) => product.id === item.id);

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-900/10 dark:border-stone-800 dark:bg-stone-900"
            >
              <Link to={`/products/${item.id}`} className="block overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 hover:scale-105"
                />
              </Link>
              <div className="space-y-4 p-5">
                <div>
                  <Link
                    to={`/products/${item.id}`}
                    className="text-xl font-semibold text-stone-950 dark:text-white"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-2 text-2xl font-bold text-stone-950 dark:text-white">
                    {formatCurrency(item.price)}
                  </p>
                </div>
                <Rating value={item.rating} reviews={0} compact />
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    disabled={!fullProduct}
                    onClick={() => fullProduct && addToCart(fullProduct)}
                    type="button"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add
                  </Button>
                  <button
                    className="rounded-full border border-stone-200 p-3 text-stone-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-stone-700 dark:hover:bg-red-950/20"
                    onClick={() => fullProduct && toggleWishlist(fullProduct)}
                    type="button"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
