# React + TypeScript + Vite

1. Basic installation of React, Typescript, and Vite. [https://vite.dev/guide/]
2. Installed React Router Declarative mode (react-router-dom). [https://reactrouter.com/start/declarative/installation]
   a. pnpm add react-router-dom
   b. Updated main.tsx with <BrowserRouter>

```
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>,
);
```

3. Installed Tailwind and Shadcn [https://ui.shadcn.com/docs/installation/vite]
   a. follow guide
