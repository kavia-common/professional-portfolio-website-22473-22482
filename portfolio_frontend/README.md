# Ocean Portfolio (Next.js + Tailwind CSS)

A modern, Ocean Professional themed personal portfolio to showcase projects, skills, and contact details.

## Quick start

- Install dependencies:
  - npm install
- Run dev server:
  - npm run dev
- Build static export:
  - npm run build
- Start production server:
  - npm start

Open http://localhost:3000 to view.

## Features

- Ocean Professional theme (blue primary and amber accents)
- Header with navigation, sections for Hero, Projects, About, Skills
- Contact form (client-side validation and success/error states)
- Accessible, responsive, and performant
- Static export ready (next.config.ts uses output: "export")

## Customization

- Edit content in `src/app/page.tsx`
- Design tokens in `src/app/globals.css`
- Update metadata in `src/app/layout.tsx`

## Notes

- The contact form demonstrates UX only in static mode. Integrate your preferred backend/email provider by wiring up a POST call in `onSubmit`.
