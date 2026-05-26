import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Rating from '../common/Rating.jsx';
import { useStore } from '../../context/StoreContext.jsx';
import { formatCurrency } from '../../utils/formatters.js';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <article className="group animate-fade-up overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/10 dark:border-stone-800 dark:bg-stone-900">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-800">
        <Link to={`/products/${product.id}`} aria-label={`View ${product.title}`}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-stone-800 backdrop-blur dark:bg-stone-950/80 dark:text-stone-100">
            {product.badge}
          </span>
        )}
        <button
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-4 top-4 rounded-full p-3 shadow-lg backdrop-blur transition hover:scale-105 ${
            isWishlisted
              ? 'bg-stone-950 text-white dark:bg-white dark:text-stone-950'
              : 'bg-white/90 text-stone-800 dark:bg-stone-950/80 dark:text-white'
          }`}
          onClick={() => toggleWishlist(product)}
          type="button"
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <Link
            to={`/products/${product.id}`}
            className="text-lg font-semibold text-stone-950 transition hover:text-stone-600 dark:text-white dark:hover:text-stone-300"
          >
            {product.title}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
            {product.description}
          </p>
        </div>
        <Rating value={product.rating} reviews={product.reviews} compact />
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xl font-bold text-stone-950 dark:text-white">
              {formatCurrency(product.price)}
            </p>
            {product.oldPrice && (
              <p className="text-sm text-stone-400 line-through">
                {formatCurrency(product.oldPrice)}
              </p>
            )}
          </div>
          <Button
            className="px-4 py-2.5"
            onClick={() => addToCart(product)}
            type="button"
          >
            <ShoppingBag className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
