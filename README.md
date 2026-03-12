# Portfolio Astro Site

This repository contains a personal portfolio built with [Astro](https://astro.build) for Aymane Zarouali. The structure follows a data-driven approach: content is stored in a single TypeScript file (`src/data/profile.ts`) and every section of the website renders only when data is available.

## 🚀 Project Structure

```
/
├── public/                 # static assets (images, CV, etc.)
├── src/
│   ├── components/         # reusable Astro components
│   ├── data/               # central profile data file
│   ├── layouts/            # layout components (BaseLayout)
│   └── pages/              # page entries (index.astro)
├── package.json
└── README.md
```

## 🧞 Useful Commands

Run from the project root:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                            |
| `npm run dev`             | Start development server (`localhost:4321`)     |
| `npm run build`           | Build production output to `./dist/`            |
| `npm run preview`         | Preview the production build locally            |
| `npm run astro -- --help` | Astro CLI help                                  |

## ✏️ Editing Content

All editable content lives in `src/data/profile.ts`. Modify that file to update the name, sections, skills, projects, etc.; empty arrays or missing fields will automatically hide the corresponding section.

## ✅ Deployment

This project is configured to deploy on Vercel using the static adapter. After building (`npm run build`), run `vercel --prod --yes` to push to production. A custom alias is defined in `vercel.json`.

## 📌 Additional Notes

- Theme toggling, header drawer, chatbot, and CV export are implemented as standalone components.
- Vercel analytics is included via `@vercel/analytics` (injected in `BaseLayout`).
- The site respects dark/light theme and saves preference in `localStorage`.
- See component JSdoc comments for more implementation details.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
