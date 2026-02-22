# Frontend Practice

A personal learning repository for exploring modern frontend frameworks — **React**, **Angular**, and **Vue** — by building hands-on projects. Each section focuses on understanding core concepts such as component lifecycle, syntax, state management, routing, and more.

## Purpose

The goal of this repository is to:

- Learn and compare the three major frontend frameworks through practical projects
- Understand each framework's **component lifecycle** and how it differs
- Practice framework-specific **syntax**, **templating**, and **data binding**
- Explore **state management** patterns (local state, context, stores)
- Build real-world mini-projects to reinforce concepts

## Repository Structure

```
frontend-practice/
├── react/          # React learning projects
│   └── todos/      # Todo app — first React project
├── angular/        # Angular learning projects (coming soon)
└── vue/            # Vue learning projects (coming soon)
```

## Frameworks Overview

### React
- **Library** for building UIs, maintained by Meta
- Uses **JSX** syntax and a **virtual DOM**
- Component lifecycle via hooks (`useState`, `useEffect`, etc.)
- Routing via React Router, styling via TailwindCSS

### Angular
- **Full framework** maintained by Google
- Uses **TypeScript** and **HTML templates** with directives
- Rich lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
- Built-in dependency injection, RxJS for reactivity

### Vue
- **Progressive framework** — easy to adopt incrementally
- Uses **Single File Components** (`.vue` files)
- Lifecycle hooks (`onMounted`, `onUnmounted`, etc.)
- Composition API and Options API both supported

## Learning Topics Covered

| Topic | React | Angular | Vue |
|---|---|---|---|
| Component Syntax | JSX / TSX | HTML Templates | SFC (`.vue`) |
| Lifecycle Hooks | `useEffect` | `ngOnInit`, `ngOnDestroy` | `onMounted`, `onUnmounted` |
| State Management | `useState`, Context | Services, NgRx | `ref`, `reactive`, Pinia |
| Routing | React Router | Angular Router | Vue Router |
| Styling | TailwindCSS | CSS / SCSS | CSS / TailwindCSS |
| HTTP / Data | `fetch`, loaders | `HttpClient` | `fetch`, Axios |

## Projects

| Project | Framework | Concepts Practiced |
|---|---|---|
| [Todos App](./react/todos/) | React | Components, state, lifecycle, routing, CRUD |

> More projects will be added as learning progresses.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Bun](https://bun.sh/) or npm / pnpm
- Basic knowledge of HTML, CSS, and JavaScript/TypeScript

---

*This is a personal learning workspace — projects are intentionally kept simple to focus on framework fundamentals.*
