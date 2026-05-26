export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}) {
  const centered = align === 'center';

  return (
    <div
      className={`mb-10 flex flex-col gap-4 ${
        centered ? 'mx-auto max-w-3xl text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? '' : 'max-w-2xl'}>
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-stone-950 dark:text-white md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
