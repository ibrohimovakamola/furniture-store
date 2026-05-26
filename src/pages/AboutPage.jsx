import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

const values = [
  'Materials chosen for longevity, tactility, and responsible sourcing.',
  'Furniture scaled by interior designers for apartments, homes, and boutique hospitality.',
  'A calm ecommerce journey backed by human design concierge support.',
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-stone-500">
            Our studio
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-7xl">
            Luxury furniture without the showroom friction.
          </h1>
          <p className="mt-6 text-lg leading-9 text-stone-600 dark:text-stone-300">
            Maison Luxe was built for design-aware customers who want premium pieces,
            transparent details, and a seamless buying experience from discovery to delivery.
          </p>
          <Button as="link" to="/products" className="mt-8">
            Explore collection <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-900/10">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
            alt="Modern furniture showroom"
            className="h-[34rem] w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader
          eyebrow="What guides us"
          title="A design system for beautiful, livable homes"
          description="Every collection is edited through a lens of proportion, material honesty, and long-term usefulness."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <span className="text-sm font-bold text-stone-400">0{index + 1}</span>
              <p className="mt-5 text-lg leading-8 text-stone-700 dark:text-stone-200">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
