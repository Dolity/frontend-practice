# Vue — Learning Section

This section contains projects built with **Vue 3** as part of a personal journey to learn modern frontend development. Vue is a progressive framework that is approachable, performant, and versatile.

## Tech Stack

- **Vue 3** — progressive UI framework
- **TypeScript** — type safety with `<script setup lang="ts">`
- **Vite** — fast dev server and bundler
- **Vue Router** — official routing library
- **Pinia** — official state management store
- **TailwindCSS** — utility-first styling

## Learning Objectives

By building projects in this section, the goal is to understand:

- **Single File Components (SFC)** — `.vue` files combining template, script, and style
- **Composition API** — `setup()`, `ref`, `reactive`, `computed`, `watch`
- **Options API** — `data()`, `methods`, `computed`, `watch` (classic style)
- **Template syntax** — directives, interpolation, and event handling
- **Component lifecycle hooks** — understanding when Vue calls each hook
- **Props & Emits** — parent-child communication
- **Slots** — flexible component composition
- **Vue Router** — navigation, route params, guards, nested routes
- **Pinia** — global state management with stores
- **Reactivity system** — how Vue tracks and updates reactive data

## Vue Component Lifecycle

Vue 3 (Composition API) lifecycle hooks:

| Hook | When It Runs |
|---|---|
| `onBeforeMount` | Before the component is mounted to the DOM |
| `onMounted` | After the component is mounted — ideal for DOM access or API calls |
| `onBeforeUpdate` | Before the component re-renders due to a reactive change |
| `onUpdated` | After the component re-renders |
| `onBeforeUnmount` | Before the component is removed from the DOM |
| `onUnmounted` | After the component is removed — ideal for cleanup |

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const count = ref(0);

onMounted(() => {
  console.log('Component mounted');
});

onUnmounted(() => {
  console.log('Component unmounted — clean up here');
});
</script>
```

## Vue Template Syntax

```vue
<template>
  <!-- Interpolation -->
  <p>{{ message }}</p>

  <!-- Attribute binding -->
  <img :src="imageUrl" />

  <!-- Event binding -->
  <button @click="handleClick">Click me</button>

  <!-- Two-way binding -->
  <input v-model="username" />

  <!-- Conditional rendering -->
  <div v-if="isVisible">Visible content</div>
  <div v-else>Hidden content</div>

  <!-- List rendering -->
  <li v-for="(item, index) in items" :key="item.id">
    {{ index }}: {{ item.name }}
  </li>
</template>
```

## Composition API vs Options API

```vue
<!-- Composition API (recommended for Vue 3) -->
<script setup lang="ts">
import { ref, computed } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);
const increment = () => count.value++;
</script>

<!-- Options API (classic style) -->
<script lang="ts">
export default {
  data() {
    return { count: 0 };
  },
  computed: {
    doubled() { return this.count * 2; }
  },
  methods: {
    increment() { this.count++; }
  }
};
</script>
```

## Projects

| Project | Description | Key Concepts |
|---|---|---|
| *(coming soon)* | — | — |

> Projects will be added as Vue learning progresses.

## Getting Started

```bash
# Create a new Vue project with Vite
npm create vue@latest

# Install dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Resources

- [Vue 3 Docs](https://vuejs.org/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
