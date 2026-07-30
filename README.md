# Pressure Paradox

A React + Vite web project built with Tailwind CSS and React Router. The app appears to center on supporting academic pressure, study tools, mental health resources, and career path guidance through interactive pages.

## Features

- React app scaffolded with Vite
- Tailwind CSS styling
- Client-side routing with `react-router-dom`
- Animated page transitions via `framer-motion`
- Multiple pages for:
  - Home
  - Career Paths
  - Growth Module
  - Mental Health
  - Quiz
  - Results
  - Resources
  - School Counselors
  - Study Tools

## Project structure

- `index.html` - entry HTML file
- `package.json` - scripts and dependencies
- `vite.config.js` - Vite configuration
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `src/`
  - `main.jsx` - renders the app
  - `App.jsx` - root application component
  - `index.css` - base styles
  - `components/` - reusable UI components
  - `pages/` - route pages
  - `data/` - shared application data
- `Design instructions/` - project design resources and code examples

## Getting started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `framer-motion`

## Dev dependencies

- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `@tailwindcss/forms`

## Notes

The app uses Vite and modern React. If you want to update content or add pages, start from `src/App.jsx` and the `src/pages/` folder.
