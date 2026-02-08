# DDR Health & Fitness

Personal trainer website for David D. Rogers — Nashville, TN.

## Tech Stack

- **React 19** + TypeScript
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Scroll animations
- **Lucide React** — Icons
- **Vercel** — Deployment

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to GitHub and connect to Vercel, or run:

```bash
npx vercel
```

## Structure

All website copy lives in `src/config/site-config.ts` — edit text there without touching components.

```
src/
├── components/     # All page sections
│   └── ui/         # Reusable UI components
├── config/         # Centralized copy & config
├── hooks/          # Custom React hooks
├── App.tsx         # Main app layout
└── index.css       # Tailwind theme & base styles
```
