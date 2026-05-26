import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader.jsx';
import { categories } from '../../data/products.js';

export default function CategoriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Shop by room"
        title="Curated categories for every part of the home"
        description="Explore premium furniture and decor organized around the way you live, host, work, and recharge."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group relative overflow-hidden rounded-[1.75rem] bg-stone-200 shadow-sm"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-200">{category.description}</p>
                </div>
                <span className="rounded-full bg-white/15 p-2 backdrop-blur transition group-hover:-translate-y-1 group-hover:bg-white group-hover:text-stone-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
