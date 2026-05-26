import { Link } from 'react-router-dom';

const styles = {
  primary:
    'bg-stone-950 text-white shadow-lg shadow-stone-900/15 hover:-translate-y-0.5 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200',
  secondary:
    'border border-stone-300 bg-white/80 text-stone-900 hover:-translate-y-0.5 hover:border-stone-950 hover:bg-white dark:border-stone-700 dark:bg-stone-900/80 dark:text-white dark:hover:border-stone-300',
  ghost:
    'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800',
};

export default function Button({
  as = 'button',
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-stone-950';
  const Component = as === 'link' ? Link : 'button';

  return (
    <Component className={`${baseClass} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
