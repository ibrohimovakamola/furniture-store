import SectionHeader from '../common/SectionHeader.jsx';
import { whyChooseUs } from '../../data/siteContent.js';

export default function WhyChooseUs() {
  return (
    <section className="bg-stone-950 py-20 text-white dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Why choose us"
          title="A complete luxury furniture experience"
          description="From material curation to delivery and after-care, every touchpoint is designed to feel calm, transparent, and elevated."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map(({ description, icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.1]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-stone-950">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-stone-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
