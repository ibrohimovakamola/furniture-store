import { useMemo, useState } from 'react';
import { products } from '../data/products.js';

const PRODUCTS_PER_PAGE = 8;

const sortProducts = (items, sortBy) => {
  const sorted = [...items];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    default:
      return sorted;
  }
};

export function useProductFilters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch =
        !normalizedSearch ||
        [product.title, product.description, product.category]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    return sortProducts(filtered, sortBy);
  }, [category, searchTerm, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pageStart = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    pageStart,
    pageStart + PRODUCTS_PER_PAGE,
  );

  const updateSearchTerm = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const updateCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const updateSortBy = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return {
    category,
    currentPage,
    filteredProducts,
    paginatedProducts,
    searchTerm,
    setCurrentPage,
    setCategory: updateCategory,
    setSearchTerm: updateSearchTerm,
    setSortBy: updateSortBy,
    sortBy,
    totalPages,
  };
}
