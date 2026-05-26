import Button from '../components/common/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.32em] text-stone-500">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-7xl">
        This room has not been furnished yet.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
        The page you requested does not exist. Return home or continue exploring the
        Maison Luxe collection.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button as="link" to="/">
          Go home
        </Button>
        <Button as="link" to="/products" variant="secondary">
          Shop collection
        </Button>
      </div>
    </section>
  );
}
