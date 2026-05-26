import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ value, onChange, min = 1 }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(value + 1);

  return (
    <div className="inline-flex items-center rounded-full border border-stone-200 bg-white p-1 dark:border-stone-700 dark:bg-stone-900">
      <button
        aria-label="Decrease quantity"
        className="rounded-full p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
        onClick={decrease}
        type="button"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-10 text-center text-sm font-semibold text-stone-950 dark:text-white">
        {value}
      </span>
      <button
        aria-label="Increase quantity"
        className="rounded-full p-2 text-stone-600 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
        onClick={increase}
        type="button"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
