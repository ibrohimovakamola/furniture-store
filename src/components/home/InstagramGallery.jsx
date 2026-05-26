import { Instagram } from 'lucide-react';
import SectionHeader from '../common/SectionHeader.jsx';
import { instagramGallery } from '../../data/siteContent.js';

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        align="center"
        eyebrow="@maisonluxe"
        title="Styled by our community"
        description="Follow along for material close-ups, room reveals, and quiet luxury inspiration from real homes."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {instagramGallery.map((image, index) => (
          <a
            key={image}
            href="#top"
            className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-stone-200"
          >
            <img
              src={image}
              alt={`Maison Luxe Instagram interior ${index + 1}`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-stone-950/0 text-white opacity-0 transition duration-300 group-hover:bg-stone-950/35 group-hover:opacity-100">
              <Instagram className="h-7 w-7" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
