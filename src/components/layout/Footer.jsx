import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = ['Sofas', 'Beds', 'Chairs', 'Tables', 'Lighting'];
const company = ['About', 'Contact', 'Design Services', 'Trade Program'];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-sm font-bold text-white dark:bg-white dark:text-stone-950">
                ML
              </span>
              <span className="text-xl font-bold text-stone-950 dark:text-white">
                Maison Luxe
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-stone-600 dark:text-stone-300">
              Premium modern furniture for composed homes, hospitality-grade comfort,
              and interiors that age beautifully.
            </p>
            <div className="mt-6 flex gap-3">
              {['IG', 'PT', 'YT'].map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-xs font-bold text-stone-700 transition hover:-translate-y-1 hover:border-stone-950 dark:border-stone-700 dark:text-stone-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-stone-950 dark:text-white">Collections</h3>
            <ul className="mt-5 space-y-3">
              {collections.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-950 dark:text-white">Company</h3>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'About' ? '/about' : item === 'Contact' ? '/contact' : '#'}
                    className="text-sm text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-stone-950 dark:text-white">Visit our studio</h3>
            <ul className="mt-5 space-y-4 text-sm text-stone-600 dark:text-stone-300">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-stone-400" />
                84 Mercer Street, New York, NY
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-stone-400" />
                +1 (212) 555-0184
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-stone-400" />
                hello@maisonluxe.example
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-stone-400" />
                @maisonluxe
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-stone-100 pt-8 text-sm text-stone-500 dark:border-stone-800 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Maison Luxe. All rights reserved.</p>
          <p>Free swatches · White-glove delivery · Design concierge</p>
        </div>
      </div>
    </footer>
  );
}
