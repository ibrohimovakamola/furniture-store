import { Star } from 'lucide-react';

export default function Rating({ value, reviews, compact = false }) {
  return (
    <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300">
      <div className="flex items-center gap-0.5 text-amber-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < Math.round(value) ? 'fill-current' : 'fill-transparent'
            }`}
          />
        ))}
      </div>
      <span className="font-medium text-stone-800 dark:text-stone-100">{value}</span>
      {!compact && <span>({reviews} reviews)</span>}
    </div>
  );
}
