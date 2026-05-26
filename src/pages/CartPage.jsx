import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import QuantitySelector from '../components/product/QuantitySelector.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { formatCurrency } from '../utils/formatters.js';

export default function CartPage() {
  const {
    cart,
    clearCart,
    removeFromCart,
    shipping,
    subtotal,
    tax,
    total,
    updateCartQuantity,
  } = useStore();

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <EmptyState
          title="Your cart is empty"
          description="Explore the collection and add furniture, lighting, and decor pieces to begin designing your space."
          actionLabel="Shop products"
          actionTo="/products"
        />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-500">
            Shopping cart
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-950 dark:text-white md:text-6xl">
            Your selected pieces
          </h1>
        </div>
        <button
          className="text-left text-sm font-semibold text-stone-500 underline-offset-4 transition hover:text-stone-950 hover:underline dark:hover:text-white md:text-right"
          onClick={clearCart}
          type="button"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="grid gap-5 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:grid-cols-[150px_1fr_auto]"
            >
              <Link to={`/products/${item.id}`} className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover transition duration-500 hover:scale-105 sm:h-full"
                />
              </Link>
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <Link
                    to={`/products/${item.id}`}
                    className="text-xl font-semibold text-stone-950 transition hover:text-stone-600 dark:text-white"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-400">
                    {item.category}
                  </p>
                  <p className="mt-4 text-lg font-bold text-stone-950 dark:text-white">
                    {formatCurrency(item.price)}
                  </p>
                </div>
                <QuantitySelector
                  value={item.quantity}
                  onChange={(quantity) => updateCartQuantity(item.id, quantity)}
                />
              </div>
              <div className="flex items-start justify-between gap-5 sm:flex-col sm:items-end">
                <p className="text-lg font-bold text-stone-950 dark:text-white">
                  {formatCurrency(item.price * item.quantity)}
                </p>
                <button
                  className="rounded-full border border-stone-200 p-3 text-stone-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-stone-700 dark:hover:bg-red-950/20"
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900">
          <h2 className="text-2xl font-semibold text-stone-950 dark:text-white">
            Order summary
          </h2>
          <div className="mt-6 space-y-4 border-b border-stone-100 pb-6 text-sm dark:border-stone-800">
            <div className="flex justify-between">
              <span className="text-stone-500">Subtotal</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">White-glove delivery</span>
              <span className="font-semibold">
                {shipping === 0 ? 'Included' : formatCurrency(shipping)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Estimated tax</span>
              <span className="font-semibold">{formatCurrency(tax)}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between text-xl font-bold text-stone-950 dark:text-white">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <Button className="mt-8 w-full" type="button">
            Continue to checkout
          </Button>
          <Button as="link" to="/products" variant="secondary" className="mt-3 w-full">
            Keep shopping
          </Button>
        </aside>
      </div>
    </section>
  );
}
