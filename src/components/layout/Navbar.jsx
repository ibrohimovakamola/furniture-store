import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../../context/StoreContext.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition hover:text-stone-950 dark:hover:text-white ${
    isActive ? 'text-stone-950 dark:text-white' : 'text-stone-500 dark:text-stone-300'
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, darkMode, toggleDarkMode, wishlistCount } = useStore();

  const iconButton =
    'relative rounded-full border border-stone-200 bg-white/80 p-2.5 text-stone-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-stone-950 dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-200 dark:hover:border-stone-300';

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f8f7f4]/90 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-sm font-bold text-white transition group-hover:scale-105 dark:bg-white dark:text-stone-950">
            ML
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-stone-950 dark:text-white">
              Maison Luxe
            </span>
            <span className="block text-xs uppercase tracking-[0.28em] text-stone-500">
              Furniture
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/products" className={iconButton} aria-label="Search products">
            <Search className="h-5 w-5" />
          </Link>
          <button
            aria-label="Toggle dark mode"
            className={iconButton}
            onClick={toggleDarkMode}
            type="button"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Link to="/wishlist" className={iconButton} aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-950 px-1 text-[10px] font-bold text-white dark:bg-white dark:text-stone-950">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className={iconButton} aria-label="Shopping cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-950 px-1 text-[10px] font-bold text-white dark:bg-white dark:text-stone-950">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button
          aria-label="Toggle mobile menu"
          className="rounded-full border border-stone-200 bg-white p-2.5 text-stone-800 lg:hidden dark:border-stone-700 dark:bg-stone-900 dark:text-white"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <div className="mx-4 mb-4 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 border-t border-stone-100 pt-4 dark:border-stone-800">
              <Link to="/products" className={iconButton} onClick={() => setIsOpen(false)}>
                <Search className="mx-auto h-5 w-5" />
              </Link>
              <button className={iconButton} onClick={toggleDarkMode} type="button">
                {darkMode ? (
                  <Sun className="mx-auto h-5 w-5" />
                ) : (
                  <Moon className="mx-auto h-5 w-5" />
                )}
              </button>
              <Link to="/wishlist" className={iconButton} onClick={() => setIsOpen(false)}>
                <Heart className="mx-auto h-5 w-5" />
              </Link>
              <Link to="/cart" className={iconButton} onClick={() => setIsOpen(false)}>
                <ShoppingBag className="mx-auto h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
