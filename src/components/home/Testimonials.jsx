import { Quote } from 'lucide-react';
import SectionHeader from '../common/SectionHeader.jsx';
import { testimonials } from '../../data/siteContent.js';

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="Client stories"
        title="Designed for real homes and remarkable everyday use"
        description="Our clients choose pieces that look gallery-ready, withstand daily life, and arrive with a service experience that feels effortless."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-900/10 dark:border-stone-800 dark:bg-stone-900"
          >
            <Quote className="h-8 w-8 text-stone-300" />
            <blockquote className="mt-5 text-lg leading-8 text-stone-700 dark:text-stone-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-stone-950 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {testimonial.location}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
