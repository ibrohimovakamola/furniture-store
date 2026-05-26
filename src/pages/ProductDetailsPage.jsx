import { ArrowLeft, Heart, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import Rating from '../components/common/Rating.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import QuantitySelector from '../components/product/QuantitySelector.jsx';
import { useStore } from '../context/StoreContext.jsx';
import { getProductById, getRelatedProducts } from '../data/products.js';
import { formatCurrency } from '../utils/formatters.js';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, wishlist } = useStore();

  if (!product) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-stone-950 dark:text-white">
          Product not found
        </h1>
        <p className="mt-4 text-stone-600 dark:text-stone-300">
          The piece you are looking for may have been moved or retired.
        </p>
        <Button as="link" to="/products" className="mt-8">
          Return to products
        </Button>
      </section>
    );
  }

  const relatedProducts = getRelatedProducts(product);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to collection
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <div className="overflow-hidden rounded-[2.5rem] bg-stone-200 shadow-xl shadow-stone-900/10 dark:bg-stone-800">
            <img
              src={selectedImage}
              alt={product.title}
              className="h-[32rem] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.map((image) => (
              <button
                key={image}
                className={`overflow-hidden rounded-[1.25rem] border-2 transition ${
                  selectedImage === image
                    ? 'border-stone-950 dark:border-white'
                    : 'border-transparent hover:border-stone-300'
                }`}
                onClick={() => setSelectedImage(image)}
                type="button"
              >
                <img
                  src={image}
                  alt={`${product.title} gallery`}
                  className="h-28 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 lg:p-8">
          {product.badge && (
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-stone-600 dark:bg-stone-800 dark:text-stone-300">
              {product.badge}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-5xl">
            {product.title}
          </h1>
          <div className="mt-4">
            <Rating value={product.rating} reviews={product.reviews} />
          </div>
          <p className="mt-6 text-3xl font-bold text-stone-950 dark:text-white">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-6 leading-8 text-stone-600 dark:text-stone-300">
            {product.description}
          </p>

          <div className="mt-8 grid gap-4 border-y border-stone-100 py-6 text-sm dark:border-stone-800">
            <div className="flex justify-between gap-4">
              <span className="text-stone-500">Material</span>
              <span className="text-right font-semibold text-stone-900 dark:text-stone-100">
                {product.material}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-stone-500">Dimensions</span>
              <span className="text-right font-semibold text-stone-900 dark:text-stone-100">
                {product.dimensions}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-stone-500">Finishes</span>
              <span className="text-right font-semibold text-stone-900 dark:text-stone-100">
                {product.colors.join(', ')}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <QuantitySelector value={quantity} onChange={setQuantity} />
            <Button
              className="flex-1"
              onClick={() => addToCart(product, quantity)}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to cart
            </Button>
            <Button
              variant="secondary"
              onClick={() => toggleWishlist(product)}
              type="button"
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
              Wishlist
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-950">
              <Truck className="h-5 w-5 text-stone-500" />
              <p className="mt-2 text-sm font-semibold">White-glove delivery</p>
              <p className="mt-1 text-sm text-stone-500">Placed and assembled in-room.</p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-4 dark:bg-stone-950">
              <ShieldCheck className="h-5 w-5 text-stone-500" />
              <p className="mt-2 text-sm font-semibold">5-year warranty</p>
              <p className="mt-1 text-sm text-stone-500">Structural coverage included.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
        <h2 className="text-2xl font-semibold text-stone-950 dark:text-white">
          Customer reviews
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {['Exceptional quality', 'Looks even better in person', 'Delivery was flawless'].map(
            (review) => (
              <article
                key={review}
                className="rounded-2xl bg-stone-50 p-5 dark:bg-stone-950"
              >
                <Rating value={5} reviews={0} compact />
                <h3 className="mt-4 font-semibold text-stone-950 dark:text-white">
                  {review}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                  Premium materials, thoughtful proportions, and a showroom-level
                  service experience from start to finish.
                </p>
              </article>
            ),
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <SectionHeader
            eyebrow="Complete the room"
            title="Related products"
            description="Pair this piece with complementary silhouettes from the same collection family."
          />
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </section>
  );
}
