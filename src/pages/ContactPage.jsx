import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/common/Button.jsx';

const contactCards = [
  { icon: MapPin, title: 'Studio', detail: '84 Mercer Street, New York, NY' },
  { icon: Phone, title: 'Phone', detail: '+1 (212) 555-0184' },
  { icon: Mail, title: 'Email', detail: 'hello@maisonluxe.example' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-stone-950 p-8 text-white md:p-12 dark:bg-stone-900">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-stone-400">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Speak with a design concierge.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
          Ask about finishes, dimensions, delivery windows, trade projects, or full-room
          planning. We respond with thoughtful, specific guidance.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div className="space-y-4">
          {contactCards.map(({ detail, icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
            >
              <Icon className="h-6 w-6 text-stone-500" />
              <h2 className="mt-4 text-xl font-semibold text-stone-950 dark:text-white">
                {title}
              </h2>
              <p className="mt-2 text-stone-600 dark:text-stone-300">{detail}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200">
              First name
              <input
                className="h-14 rounded-2xl border border-stone-200 bg-stone-50 px-4 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-950 dark:focus:border-stone-300"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200">
              Last name
              <input
                className="h-14 rounded-2xl border border-stone-200 bg-stone-50 px-4 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-950 dark:focus:border-stone-300"
                required
                type="text"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200">
            Email
            <input
              className="h-14 rounded-2xl border border-stone-200 bg-stone-50 px-4 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-950 dark:focus:border-stone-300"
              required
              type="email"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-stone-700 dark:text-stone-200">
            Project details
            <textarea
              className="min-h-40 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-950 dark:border-stone-700 dark:bg-stone-950 dark:focus:border-stone-300"
              required
            />
          </label>
          <Button className="mt-6" type="submit">
            Send message
          </Button>
          {submitted && (
            <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">
              Thank you. A Maison Luxe concierge will follow up shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
