# Angela Solomons — Developer Portfolio (Vue 3)

Vue 3 + Vite port of the "Tokyo Tech Developer Portfolio" Figma Make design.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
- `src/App.vue` – layout, navigation, 6 horizontal-scroll panels, transitions, project modal
- `src/data.js` – projects, skills, certifications, tracer paths (edit content here)
- `src/components/` – `CurlyPortrait` (animated SVG), `SectionTitle`, `SectionControls`, `ArrowIcon`
- `src/style.css` – all styling (plain CSS, no Tailwind needed)
- `public/` – favicon and downloadable CV
