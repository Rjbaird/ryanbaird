# Ryan Baird

Personal site and portfolio built with Astro 7, Hono, Datastar, and Cloudflare Workers.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local Astro dev server |
| `npm run build` | Build the Cloudflare Workers SSR output |
| `npm run preview` | Preview the built site locally |
| `npm run deploy` | Build and deploy with Wrangler |

## Stack

- Astro SSR with the Cloudflare adapter
- Hono in `src/fetch.ts` for Worker routes and short links
- Datastar for progressive client-side interactions
- Astro content collections for blog, projects, jobs, and school entries

## Short Links

Short links live in `src/fetch.ts` under `/r/:slug`.
