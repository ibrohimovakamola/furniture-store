import Button from './Button.jsx';

export default function EmptyState({ title, description, actionLabel, actionTo }) {
  return (
    <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white/75 px-6 py-16 text-center shadow-sm dark:border-stone-700 dark:bg-stone-900/70">
      <h2 className="text-2xl font-semibold text-stone-950 dark:text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-stone-600 dark:text-stone-300">
        {description}
      </p>
      {actionLabel && actionTo && (
        <Button as="link" to={actionTo} className="mt-8">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
