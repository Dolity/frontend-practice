# Astro — Learning Section

This section contains projects built with **Astro** as part of a personal journey to learn modern frontend development. Astro is a modern static site builder that ships zero JavaScript by default while supporting interactive islands.

## Tech Stack

- **Astro** — static site builder with partial hydration
- **TypeScript** — type safety
- **Astro Components** — `.astro` files for templates
- **Astro Islands** — interactive components (React, Vue, Svelte, etc.)
- **Vite** — fast dev server and bundler
- **TailwindCSS** — utility-first styling

## Learning Objectives

By building projects in this section, the goal is to understand:

- **Astro component syntax** — `.astro` files combining HTML, CSS, and JavaScript
- **Server-side rendering (SSR)** — rendering on the server, minimal client JavaScript
- **Islands architecture** — interactive components in a static site
- **File-based routing** — automatic routing from file structure
- **Layouts** — reusable page templates
- **Props & slots** — component composition and data passing
- **Partial hydration** — loading JavaScript only for interactive components
- **Static generation** — building static HTML at build time
- **API routes** — server-side endpoints in Astro
- **Markdown support** — building content-driven sites
- **Framework integration** — using React, Vue, Svelte components within Astro

## Astro Component Lifecycle

Astro components are **server-side only** — they run at build time or request time, not in the browser. The lifecycle is different from client-side frameworks:

| Phase | When It Happens | Description |
|---|---|---|
| **Parse** | Build/request time | Astro parses the `.astro` file |
| **Execute** | Build/request time | Server-side JavaScript runs (frontmatter) |
| **Render** | Build/request time | HTML is generated and sent to the browser |
| **Hydration** | Browser (optional) | Interactive islands load JavaScript if needed |

```astro
---
// Server-side code (runs at build/request time)
const title = "Hello Astro";
const items = await fetchData();
---

<!-- HTML template (rendered to static HTML) -->
<div>
  <h1>{title}</h1>
  <ul>
    {items.map((item) => <li>{item.name}</li>)}
  </ul>
</div>

<style>
  /* Scoped CSS (only for this component) */
  h1 { color: blue; }
</style>
```

## Astro Syntax

### Basic Component Structure

```astro
---
// Frontmatter: Server-side JavaScript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const title = "My Blog";
---

<!-- Template: HTML with Astro expressions -->
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <ul>
      {posts.map((post) => (
        <li>
          <a href={post.slug}>{post.data.title}</a>
        </li>
      ))}
    </ul>
  </body>
</html>

<style>
  /* Scoped styles (only apply to this component) */
  h1 { font-size: 2rem; }
</style>
```

### Props & Slots

```astro
---
// Card.astro - Reusable component
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="card">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
  <slot />  <!-- Placeholder for child content -->
</div>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
  }
</style>
```

### Interactive Islands (Hydration)

```astro
---
// Page with interactive component
import Counter from '../components/Counter.jsx';
---

<html>
  <body>
    <h1>My Page</h1>
    <!-- This React component loads JavaScript in the browser -->
    <Counter client:load />
  </body>
</html>
```

Hydration directives:
- `client:load` — Load JavaScript immediately
- `client:idle` — Load when browser is idle
- `client:visible` — Load when component enters viewport
- `client:only` — Skip server rendering, render only in browser

## Key Differences from Other Frameworks

| Aspect | Astro | React | Vue | Angular |
|---|---|---|---|---|
| **Rendering** | Server-side (static) | Client-side (SPA) | Client-side (SPA) | Client-side (SPA) |
| **JavaScript** | Zero by default | Always shipped | Always shipped | Always shipped |
| **Component Syntax** | `.astro` files | JSX / TSX | `.vue` files | TypeScript classes |
| **Lifecycle** | Build/request time | Browser (hooks) | Browser (hooks) | Browser (lifecycle hooks) |
| **Use Case** | Static sites, blogs, content | Interactive apps | Interactive apps | Enterprise apps |

## Projects

| Project | Description | Key Concepts |
|---|---|---|
| *(coming soon)* | — | — |

> Projects will be added as Astro learning progresses.

## Getting Started

```bash
# Create a new Astro project
npm create astro@latest

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

## File Structure

```
astro-project/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # File-based routes
│   ├── content/          # Markdown/data collections
│   └── styles/           # Global styles
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Resources

- [Astro Docs](https://docs.astro.build/)
- [Astro Islands](https://docs.astro.build/en/concepts/islands/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Vite Docs](https://vitejs.dev/)
