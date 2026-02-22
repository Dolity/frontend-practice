# Angular — Learning Section

This section contains projects built with **Angular** as part of a personal journey to learn modern frontend development. Angular is a full-featured, opinionated framework maintained by Google.

## Tech Stack

- **Angular** (latest) — full framework
- **TypeScript** — Angular's primary language
- **Angular CLI** — project scaffolding and tooling
- **RxJS** — reactive programming with Observables
- **Angular Router** — built-in routing solution
- **Angular Forms** — reactive and template-driven forms

## Learning Objectives

By building projects in this section, the goal is to understand:

- **Angular module system** — `NgModule`, standalone components
- **Component syntax** — TypeScript class + HTML template + CSS
- **Data binding** — interpolation `{{ }}`, property `[]`, event `()`, two-way `[()]`
- **Directives** — `*ngIf`, `*ngFor`, `ngClass`, `ngStyle`, and custom directives
- **Pipes** — transforming data in templates (`date`, `currency`, `async`, custom pipes)
- **Services & Dependency Injection** — sharing logic and data across components
- **Component lifecycle hooks** — understanding when Angular calls each hook
- **Routing** — `RouterModule`, `RouterLink`, route guards, lazy loading
- **Forms** — template-driven vs reactive forms, validators
- **HTTP** — `HttpClient` for API calls, interceptors
- **RxJS** — `Observable`, `Subject`, operators (`map`, `switchMap`, `takeUntil`)

## Angular Component Lifecycle

Angular components go through a well-defined lifecycle managed by the framework:

| Hook | When It Runs |
|---|---|
| `ngOnChanges` | When input properties change (before `ngOnInit`) |
| `ngOnInit` | Once, after the first `ngOnChanges` — ideal for initialization |
| `ngDoCheck` | On every change detection cycle |
| `ngAfterContentInit` | After projected content (`<ng-content>`) is initialized |
| `ngAfterContentChecked` | After every check of projected content |
| `ngAfterViewInit` | After the component's view and child views are initialized |
| `ngAfterViewChecked` | After every check of the component's view |
| `ngOnDestroy` | Just before the component is destroyed — ideal for cleanup |

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Component initialized');
  }

  ngOnDestroy(): void {
    console.log('Component destroyed — clean up subscriptions here');
  }
}
```

## Angular Template Syntax

```html
<!-- Interpolation -->
<p>{{ title }}</p>

<!-- Property binding -->
<img [src]="imageUrl" />

<!-- Event binding -->
<button (click)="handleClick()">Click me</button>

<!-- Two-way binding -->
<input [(ngModel)]="username" />

<!-- Structural directives -->
<div *ngIf="isVisible">Visible content</div>
<li *ngFor="let item of items; let i = index">{{ i }}: {{ item }}</li>
```

## Projects

| Project | Description | Key Concepts |
|---|---|---|
| *(coming soon)* | — | — |

> Projects will be added as Angular learning progresses.

## Getting Started (Angular CLI)

```bash
# Install Angular CLI globally
npm install -g @angular/cli

# Create a new project
ng new my-app

# Run the development server
ng serve
```

The app will be available at `http://localhost:4200`.

## Resources

- [Angular Docs](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [RxJS Docs](https://rxjs.dev/)
