# React — Learning Section

This section contains projects built with **React** as part of a personal journey to learn modern frontend development. Projects are structured to progressively cover React's core concepts.

## Tech Stack

- **React 19** — UI library
- **React Router v7** — file-based routing with SSR support
- **TypeScript** — type safety
- **TailwindCSS v4** — utility-first styling
- **Vite** — fast dev server and bundler
- **Bun** — package manager and runtime

## Learning Objectives

By building projects in this section, the goal is to understand:

- **JSX / TSX syntax** — writing UI as JavaScript expressions
- **Component model** — functional components, props, and composition
- **Component lifecycle** — how React mounts, updates, and unmounts components
- **Hooks** — `useState`, `useEffect`, `useRef`, `useContext`, `useMemo`, `useCallback`
- **Event handling** — synthetic events and user interaction
- **Conditional rendering** — rendering UI based on state/props
- **Lists and keys** — rendering dynamic lists efficiently
- **Forms** — controlled vs uncontrolled inputs
- **Routing** — client-side navigation with React Router
- **Data loading** — loaders and actions (React Router pattern)
- **State lifting** — sharing state between components

## React Component Lifecycle (Hooks)

React functional components manage their lifecycle through hooks:

| Phase | Hook / Mechanism | Description |
|---|---|---|
| Mount | `useEffect(() => {}, [])` | Runs once after the component is inserted into the DOM |
| Update | `useEffect(() => {}, [dep])` | Runs when a dependency value changes |
| Unmount | `useEffect(() => { return () => {} }, [])` | Cleanup function runs before component is removed |
| Render | JSX return | Called on every render (mount + update) |

```tsx
useEffect(() => {
  // componentDidMount equivalent
  console.log("mounted");

  return () => {
    // componentWillUnmount equivalent
    console.log("unmounted");
  };
}, []);

useEffect(() => {
  // componentDidUpdate equivalent (when `value` changes)
  console.log("value changed:", value);
}, [value]);
```

## Projects

| Project | Description | Key Concepts |
|---|---|---|
| [Todos App](./todos/) | A CRUD todo list application | `useState`, `useEffect`, components, routing, forms |

> More projects will be added as learning progresses.

## Project Structure

```
react/
└── todos/          # Todo CRUD app
    ├── app/
    │   ├── components/   # Reusable UI components
    │   ├── routes/       # Page-level route components
    │   ├── model/        # Data / business logic
    │   └── root.tsx      # App root and layout
    ├── package.json
    └── vite.config.ts
```

## Resources

- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [TailwindCSS Docs](https://tailwindcss.com/)
