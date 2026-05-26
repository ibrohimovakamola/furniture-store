# AGENTS.md

## Cursor Cloud specific instructions

### Tech stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest + @testing-library/react + jsdom
- **Package manager:** pnpm (lockfile: `pnpm-lock.yaml`)

### Common commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (port 3000 by default) |
| Lint | `pnpm lint` |
| Tests | `pnpm test` |
| Build | `pnpm build` |

### Notes

- The dev server supports hot-reloading; code changes are reflected immediately without restart.
- Vitest config lives in `vitest.config.ts` with `@/` path alias configured.
- Test setup file is at `src/test/setup.ts` (imports `@testing-library/jest-dom/vitest`).
- Product data is stored in `src/lib/products.ts` (no database required).
- Cart state is managed via React context (`src/lib/cart-context.tsx`) — client-side only, no persistence layer.
