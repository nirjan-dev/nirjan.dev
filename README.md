# nirjan.dev

Nirjan Khadka's personal website and software development blog, built with Astro 4, MDX and Tailwind CSS. The profile focuses on backend and full-stack engineering while keeping the existing frontend writing and personal interests.

## Local setup

Use Node.js 24 LTS (`.nvmrc`) and pnpm 9, matching the GitHub workflows. `package.json` pins Vercel builds to `24.x`.

```sh
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321`.

| Command | Purpose |
| --- | --- |
| `pnpm build` | Run Astro checks and generate the static site in `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm test:e2e` | Run Playwright tests; install browsers with `pnpm exec playwright install --with-deps` first |
| `pnpm test:perf` | Run Unlighthouse against a local server at port 4321 |

## Content locations

- `src/pages/index.astro` and `src/pages/about.astro`: current positioning, recent work and personal profile.
- `src/pages/contact.astro`: contact details and the existing Web3Forms contact form. Public email: `hi@nirjan.dev`.
- `src/utils/personSchema.ts`: structured person metadata; keep its title and description aligned with the profile pages.
- `src/layouts/PageLayout.astro`: shared layout and website schema.
- `src/pages/blog.astro` and `src/pages/blog/tags/[...tag].astro`: blog listing metadata and navigation.
- `src/content/blog/`: historical MDX articles and their assets. Profile updates should not rewrite historical posts.
- `src/content/featured/`: homepage featured-post selection.
- `public/`: static assets; `astro.config.ts` sets the canonical site to `https://nirjan.dev`.

Keep experience claims scoped to the actual work: 7+ years refers to overall software development, not time using Go or any cloud provider. Do not present AWS coursework as production experience.

## Deployment

The checked-in GitHub Actions workflows target Vercel: pushes to `main` run `.github/workflows/production.yml`; pushes to other branches run `.github/workflows/preview.yaml`. They pull Vercel configuration, build artifacts, run Playwright, then deploy prebuilt artifacts. `vercel.json` supplies response headers.

These workflows require a configured Vercel project and GitHub secrets `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` and `VERCEL_TOKEN`. The deploy jobs run on separate runners but do not explicitly install the Vercel CLI; the artifact upload also does not explicitly include hidden files. Confirm CLI availability and complete `.vercel` artifact transfer before relying on this route. Repository configuration alone does not establish that a live deployment is healthy or that Vercel's separate Git integration is enabled.
