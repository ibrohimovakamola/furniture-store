import { Search, SlidersHorizontal } from 'lucide-react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EmptyState from '../components/common/EmptyState.jsx';
import Pagination from '../components/common/Pagination.jsx';
import ProductGrid from '../components/product/ProductGrid.jsx';
import { categories } from '../data/products.js';
import { useProductFilters } from '../hooks/useProductFilters.js';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const {
    category,
    currentPage,
    filteredProducts,
    paginatedProducts,
    searchTerm,
    setCategory,
    setCurrentPage,
    setSearchTerm,
    setSortBy,
    sortBy,
    totalPages,
  } = useProductFilters();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams, setCategory]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-stone-950 p-8 text-white md:p-12 dark:bg-stone-900">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-stone-400">
          Shop the collection
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Premium furniture for considered spaces.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
          Search, filter, and sort sofas, beds, chairs, tables, lighting, decor, and
          work-from-home essentials.
        </p>
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
          <label className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <input
              className="h-14 w-full rounded-full border border-stone-200 bg-stone-50 pl-12 pr-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-300"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search sofas, beds, lighting..."
              type="search"
              value={searchTerm}
            />
          </label>
          <label className="relative">
            <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
            <select
              className="h-14 w-full appearance-none rounded-full border border-stone-200 bg-stone-50 pl-12 pr-4 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-300"
              onChange={(event) => setCategory(event.target.value)}
              value={category}
            >
              <option value="all">All categories</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <select
            className="h-14 rounded-full border border-stone-200 bg-stone-50 px-5 text-stone-900 outline-none transition focus:border-stone-950 focus:bg-white dark:border-stone-700 dark:bg-stone-950 dark:text-white dark:focus:border-stone-300"
            onChange={(event) => setSortBy(event.target.value)}
            value={sortBy}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-stone-500 dark:text-stone-400">
        <p>
          Showing {paginatedProducts.length} of {filteredProducts.length} products
        </p>
        <p>Page {currentPage} of {totalPages}</p>
      </div>

      <div className="mt-6">
        {paginatedProducts.length > 0 ? (
          <ProductGrid products={paginatedProducts} />
        ) : (
          <EmptyState
            title="No products found"
            description="Try a different keyword or select all categories to continue browsing the collection."
            actionLabel="Reset collection"
            actionTo="/products"
          />
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        onChange={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
}
