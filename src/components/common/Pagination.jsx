import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
      <button
        className="rounded-full border border-stone-200 bg-white p-3 text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        type="button"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            className={`h-11 w-11 rounded-full text-sm font-semibold transition ${
              isActive
                ? 'bg-stone-950 text-white dark:bg-white dark:text-stone-950'
                : 'border border-stone-200 bg-white text-stone-700 hover:-translate-y-0.5 hover:border-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200'
            }`}
            onClick={() => onChange(page)}
            type="button"
          >
            {page}
          </button>
        );
      })}
      <button
        className="rounded-full border border-stone-200 bg-white p-3 text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-950 disabled:opacity-40 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        type="button"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
