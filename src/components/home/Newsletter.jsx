import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] bg-stone-950 p-8 text-white shadow-2xl shadow-stone-900/20 md:p-12 dark:bg-stone-900">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-400">
              Private list
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Receive new collections, styling notes, and exclusive previews.
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-white/10 p-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                className="min-h-14 flex-1 rounded-full border border-white/10 bg-white px-5 text-stone-950 outline-none transition focus:ring-2 focus:ring-stone-300"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                type="email"
                value={email}
              />
              <button
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-stone-200 px-6 text-sm font-bold text-stone-950 transition hover:-translate-y-0.5 hover:bg-white"
                type="submit"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="px-2 pt-3 text-sm text-stone-300">
              {submitted
                ? 'Thank you. Your showroom preview invite is on its way.'
                : 'No spam. Only considered design inspiration and collection launches.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
