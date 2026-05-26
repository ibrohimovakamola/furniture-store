import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button.jsx';
import { brandStats } from '../../data/siteContent.js';

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
      <div className="flex flex-col justify-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-stone-500 dark:text-stone-400">
          Luxury furniture collection 2026
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-7xl">
          Refined furniture for quietly exceptional spaces.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600 dark:text-stone-300">
          Discover sofas, beds, lighting, and sculptural accents designed with
          premium materials, balanced proportions, and white-glove service.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as="link" to="/products">
            Shop collection <ArrowRight className="h-4 w-4" />
          </Button>
          <Button as="link" to="/about" variant="secondary">
            Explore our craft
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {brandStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-stone-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-900/70"
            >
              <p className="text-2xl font-bold text-stone-950 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-5 top-10 hidden rounded-3xl bg-white p-4 shadow-2xl shadow-stone-900/10 lg:block dark:bg-stone-900">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-stone-800 dark:text-stone-100">
              White-glove delivery included
            </span>
          </div>
        </div>
        <div className="animate-float-soft overflow-hidden rounded-[2.5rem] bg-stone-200 shadow-2xl shadow-stone-900/15 dark:bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
            alt="Luxury living room with modern furniture"
            className="h-[34rem] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 right-6 max-w-xs rounded-[1.5rem] bg-stone-950 p-5 text-white shadow-2xl dark:bg-white dark:text-stone-950">
          <p className="text-sm uppercase tracking-[0.24em] text-stone-300 dark:text-stone-500">
            New arrival
          </p>
          <p className="mt-2 text-xl font-semibold">Marais Oak Bedroom Collection</p>
        </div>
      </div>
    </section>
  );
}
