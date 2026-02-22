# Todos App — React Project

A simple **Todo List** application built with React as the first hands-on project in this learning repository. The purpose is to practice React fundamentals through a classic CRUD application.

## What This Project Covers

- **Functional components** — building UI from composable pieces
- **`useState`** — managing local component state (todo list, input values)
- **`useEffect`** — reacting to state/prop changes, side effects
- **Props** — passing data and callbacks between parent and child components
- **Event handling** — form submissions, button clicks, input changes
- **Conditional rendering** — showing/hiding UI based on state
- **List rendering** — mapping over arrays with proper `key` props
- **React Router v7** — file-based routing, loaders, and actions
- **Forms** — controlled inputs and form submission patterns
- **TypeScript** — typing props, state, and event handlers

## Tech Stack

- **React 19** with **TypeScript**
- **React Router v7** (file-based routing, SSR-capable)
- **TailwindCSS v4** for styling
- **Vite** as the build tool
- **Bun** as the package manager

## Project Structure

```
todos/
├── app/
│   ├── components/       # Reusable UI components (e.g., TodoItem, TodoForm)
│   ├── routes/           # Route-level page components
│   ├── model/            # Data models and business logic
│   ├── routes.ts         # Route definitions
│   ├── root.tsx          # App root layout
│   └── app.css           # Global styles
├── public/               # Static assets
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

### Install dependencies

```bash
bun install
# or
npm install
```

### Run the development server

```bash
bun run dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
bun run build
# or
npm run build
```

## Key Concepts Practiced

### State Management with `useState`

```tsx
const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (text: string) => {
  setTodos([...todos, { id: Date.now(), text, done: false }]);
};
```

### Side Effects with `useEffect`

```tsx
useEffect(() => {
  // Runs after every render where `todos` changed
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

### React Router — Loader & Action Pattern

```tsx
export async function loader() {
  return getTodos();
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  return createTodo(form.get("text") as string);
}
```

## Features

- Add new todos
- Mark todos as complete / incomplete
- Delete todos
- Persistent state (via React Router loaders or localStorage)
