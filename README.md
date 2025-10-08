# React + TypeScript + Vite

Boilerplate for React, Typescript, Vite, with React Router (declarative mode), with Convex for the backend and Clerk for auth and payments. Tailwind and Shadcn for styling.

1. Basic installation of React, Typescript, and Vite. [https://vite.dev/guide/]
2. Installed React Router Declarative mode (react-router-dom). [https://reactrouter.com/start/declarative/installation]
   a. pnpm add react-router-dom
   b. Updated main.tsx with <BrowserRouter>
3. Installed Tailwind and Shadcn [https://ui.shadcn.com/docs/installation/vite]
   a. followed the guide
4. Installed Convex [https://docs.convex.dev/quickstart/react]
5. Installed Clerk
   a. First Clerk [https://clerk.com/docs/react/getting-started/quickstart]
   b. Combine it with Convex [https://clerk.com/docs/guides/development/integrations/databases/convex]

---

# Getting Started

[] - run pnpm install
[] - Update the index.html file with the appropriate information (fav icon, title, etc.)

---

# Basic Project Setup and File Path

```
src/
├── components/ # Reusable building blocks
│ ├── layout/ # Navigation, headers, sidebars, wrappers
│ └── ui/ # Generic UI elements (Button, Card, Modal, etc.)
│
├── features/ # Self-contained, domain-specific modules
│ └── auth/ # Authentication logic, forms, hooks
│
├── pages/ # Route-level pages
│ ├── Dashboard/ # /dashboard — main user area
│ │ ├── DashboardPage.tsx
│ │ └── components/ # Page-specific UI
│ └── Home/ # / — landing or app entry
│ ├── HomePage.tsx
│ └── components/
│
├── router/ # Central routing setup
│ └── index.tsx
│
├── App.tsx # Root layout, wraps Router
├── index.css # Global styles (Tailwind, etc.)
└── main.tsx # App entry point (React root)
```
