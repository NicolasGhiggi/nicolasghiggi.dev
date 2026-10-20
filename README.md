<p align="left">
  <img alt="nicolasghiggi.dev" src="https://shieldcn.dev/header/grid.svg?title=nicolasghiggi.dev&amp;subtitle=A+clean+dev+portfolio&amp;mode=dark&amp;align=left" />
</p>

<a href="https://github.com/vercel/next.js"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/vercel/next.js/license.svg?variant=outline&amp;font=geist" /><img alt="license" src="https://shieldcn.dev/github/vercel/next.js/license.svg?variant=outline&amp;mode=light&amp;font=geist" /></picture></a>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/github/stars/NicolasGhiggi/nicolasghiggi.dev.svg?variant=outline&amp;font=geist" /><img alt="GitHub Stars" src="https://shieldcn.dev/github/stars/NicolasGhiggi/nicolasghiggi.dev.svg?variant=outline&amp;mode=light&amp;font=geist" /></picture>
<a href="https://github.com/NicolasGhiggi/nicolasghiggi.dev"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/views/repo/NicolasGhiggi/nicolasghiggi.dev.svg?variant=outline&amp;font=geist" /><img alt="repo views" src="https://shieldcn.dev/views/repo/NicolasGhiggi/nicolasghiggi.dev.svg?variant=outline&amp;mode=light&amp;font=geist" /></picture></a>

A clean, modern developer portfolio built with Next.js, React and Tailwind CSS.

**Live site:** [nicolasghiggi-dev.vercel.app](https://nicolasghiggi-dev.vercel.app)

<p>
  <a href="#overview">Overview</a> ·
  <a href="#whats-inside">What's inside</a> ·
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech stack</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

This repository contains the source code of my personal portfolio website. It is designed to be fast, accessible and easy to maintain, with content written in MDX and a UI composed of [shadcn/ui](https://ui.shadcn.com) components built on top of [Base UI](https://base-ui.com).

<!-- Tip: add a screenshot of the site here, for example:
![Preview](./public/preview.png)
-->

## What's inside

The site is organized in a few routes and a single-page home composed of numbered sections.

| Route | Description |
| --- | --- |
| `/` | Home page with hero, about, featured projects, latest blog posts, stack, experience, certifications, insights and a call to action |
| `/projects` | Project showcase, with a dedicated case-study page for each project |
| `/blog` | Blog with posts written in MDX |
| `/contact` | Contact form with validation and email delivery |

Home page sections:

1. **Hero** – short introduction with links to the contact form and the projects page
2. **About** – overview, location with local time, social links and a GitHub activity graph
3. **Projects** – featured work with the technologies used in each project
4. **Blog** – latest posts
5. **Stack** – languages, frontend, backend, databases, developer tools and AI tools
6. **Experience** – professional timeline with role, period, duration and technologies
7. **Certifications** – earned badges and credentials
8. **Insights** – public analytics (visitors, sessions, views and session duration) powered by OpenPanel

## Features

- **Next.js App Router** with React 19 and TypeScript
- **MDX content** for blog posts and projects, with frontmatter, GitHub Flavored Markdown and syntax highlighting via Shiki
- **Internationalization** powered by `next-intl`
- **Light and dark themes** with `next-themes`
- **Smooth animations** using Motion
- **Contact form** with `react-hook-form` and `zod` validation, with emails sent through Resend and templated with React Email
- **Data visualization** with Recharts and visx (GitHub activity and analytics charts), plus interactive maps with MapLibre GL
- **Analytics and performance monitoring** with OpenPanel, Vercel Analytics and Vercel Speed Insights
- **Consistent code style** enforced by ESLint and Prettier (with the Tailwind plugin)
- **AI-friendly repository** with an `AGENTS.md` file describing project conventions for coding agents

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Base UI, tw-animate-css |
| Content | MDX, next-mdx-remote, gray-matter, remark / rehype, Shiki |
| Theming | next-themes |
| Forms | React Hook Form, Zod |
| Email | Resend, React Email |
| Animation | Motion |
| Charts and maps | Recharts, visx, MapLibre GL |
| Analytics | OpenPanel, Vercel Analytics, Vercel Speed Insights |
| Tooling | ESLint, Prettier, TypeScript |

## Project Structure

```folders
.
├── app/                  # Next.js App Router routes and layouts
├── components/           # Reusable UI components (including shadcn/ui)
├── content/              # MDX content (blog posts and projects)
├── data/                 # Static data used across the site
├── emails/               # React Email templates
├── hooks/                # Custom React hooks
├── layout/               # Layout building blocks
├── lib/                  # Utilities and helpers
├── providers/            # React context providers
├── public/               # Static assets
├── schemas/              # Zod validation schemas
├── styles/               # Global styles
├── types/                # Shared TypeScript types
├── AGENTS.md             # Guidelines for AI coding agents
├── components.json       # shadcn/ui configuration
├── mdx-components.tsx    # Custom components used to render MDX
├── next.config.ts        # Next.js configuration
├── eslint.config.mjs     # ESLint configuration
└── postcss.config.mjs    # PostCSS configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20.9 or later (required by Next.js 16)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/NicolasGhiggi/nicolasghiggi.dev.git
cd nicolasghiggi.dev

# Install dependencies
npm install
```

### Environment variables

Some features (contact form, analytics) require API keys for third-party services such as Resend and OpenPanel. Create a `.env.local` file in the project root and add the values required by those services:

```bash
# .env.local
# Add your Resend and OpenPanel credentials here
```

> The site still runs without these values, but the contact form and analytics will not work.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format `.ts` and `.tsx` files with Prettier |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Writing Content

Blog posts and projects live in the `content` directory as MDX files with frontmatter. To publish a new one, add an MDX file, fill in its frontmatter and commit it: the corresponding page is generated automatically. Custom components available inside MDX are defined in `mdx-components.tsx`.

## Adding UI Components

This project uses shadcn/ui (configured in `components.json`). To add a new component, run:

```bash
npx shadcn@latest add button
```

Components are placed in the `components` directory and can be imported like this:

```tsx
import { Button } from "@/components/ui/button";
```

## Working with AI Agents

The repository includes an [`AGENTS.md`](./AGENTS.md) file with the conventions and guidelines that coding agents (and contributors) should follow when working on the codebase.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to the `main` branch triggers a new production deployment.

To deploy your own copy, import the repository into Vercel, configure the environment variables and deploy.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNicolasGhiggi%2Fnicolasghiggi.dev)

## Contributing

This is a personal portfolio, but suggestions and bug reports are welcome. Feel free to [open an issue](https://github.com/NicolasGhiggi/nicolasghiggi.dev/issues).

## License

This project is licensed under the [MIT License](LICENSE).

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software, subject to the terms of the MIT License.

## Author

**Nicolas Ghiggi** – Computer engineering student and full stack developer based in Switzerland.

- GitHub: [@NicolasGhiggi](https://github.com/NicolasGhiggi)
- LinkedIn: [nicolasghiggi](https://linkedin.com/in/nicolasghiggi)
- daily.dev: [nicolasghiggi](https://daily.dev/nicolasghiggi)
- Website: [nicolasghiggi-dev.vercel.app](https://nicolasghiggi-dev.vercel.app)
