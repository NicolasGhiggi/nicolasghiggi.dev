# nicolasghiggi.dev

A clean, modern developer portfolio built with Next.js, React and Tailwind CSS.

**Live site:** [nicolasghiggi-dev.vercel.app](https://nicolasghiggi-dev.vercel.app)

---

## Overview

This repository contains the source code of my personal portfolio website. It is designed to be fast, accessible and easy to maintain, with content written in MDX and a UI composed of [shadcn/ui](https://ui.shadcn.com) components built on top of [Base UI](https://base-ui.com).

## Features

- **Next.js App Router** with React 19 and TypeScript
- **MDX content** with frontmatter, GitHub Flavored Markdown and syntax highlighting via Shiki
- **Internationalization** powered by `next-intl`
- **Light and dark themes** with `next-themes`
- **Smooth animations** using Motion
- **Contact form** with `react-hook-form` and `zod` validation, with emails sent through Resend and templated with React Email
- **Data visualization** with Recharts and visx, plus interactive maps with MapLibre GL
- **Analytics and performance monitoring** with OpenPanel, Vercel Analytics and Vercel Speed Insights
- **Consistent code style** enforced by ESLint and Prettier (with the Tailwind plugin)

## Tech Stack

| Category        | Technologies                                              |
| --------------- | --------------------------------------------------------- |
| Framework       | Next.js 16, React 19, TypeScript                          |
| Styling         | Tailwind CSS 4, shadcn/ui, Base UI, tw-animate-css        |
| Content         | MDX, next-mdx-remote, gray-matter, remark / rehype        |
| Forms           | React Hook Form, Zod                                      |
| Email           | Resend, React Email                                       |
| i18n            | next-intl                                                 |
| Animation       | Motion                                                    |
| Charts and maps | Recharts, visx, MapLibre GL                               |
| Analytics       | OpenPanel, Vercel Analytics, Vercel Speed Insights        |
| Tooling         | ESLint, Prettier, TypeScript                              |

## Project Structure

```folders
.
├── app/          # Next.js App Router routes and layouts
├── components/   # Reusable UI components (including shadcn/ui)
├── content/      # MDX content
├── data/         # Static data used across the site
├── emails/       # React Email templates
├── hooks/        # Custom React hooks
├── layout/       # Layout building blocks
├── lib/          # Utilities and helpers
├── providers/    # React context providers
├── public/       # Static assets
├── schemas/      # Zod validation schemas
├── styles/       # Global styles
└── types/        # Shared TypeScript types
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or later
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

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create an optimized production build         |
| `npm run start`     | Start the production server                  |
| `npm run lint`      | Run ESLint                                   |
| `npm run format`    | Format `.ts` and `.tsx` files with Prettier  |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Adding UI Components

This project uses shadcn/ui. To add a new component, run:

```bash
npx shadcn@latest add button
```

Components are placed in the `components` directory and can be imported like this:

```tsx
import { Button } from "@/components/ui/button";
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Every push to the `main` branch triggers a new production deployment.

To deploy your own copy, import the repository into Vercel, configure the environment variables and deploy.

## Contributing

This is a personal portfolio, but suggestions and bug reports are welcome. Feel free to [open an issue](https://github.com/NicolasGhiggi/nicolasghiggi.dev/issues).

## License

No license has been specified for this repository yet. All rights reserved by the author unless stated otherwise.

## Author

**Nicolas Ghiggi**

- GitHub: [@NicolasGhiggi](https://github.com/NicolasGhiggi)
- Website: [nicolasghiggi-dev.vercel.app](https://nicolasghiggi-dev.vercel.app)
