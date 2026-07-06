# Portfolio Project Analysis

This repository is now split into separate frontend and backend folders.

## Current Insight

The original project was a frontend-only portfolio website built with React, Vite, Tailwind CSS, Radix Toast, and Lucide icons. There was no backend code, no API routes, no database layer, and no server-side contact form handling.

The contact form currently shows a toast after a timeout in the browser. It does not send email or store messages yet. If you want real form submission later, that logic belongs in `backend`.

## Folder Structure

```text
.
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── StarBackground.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   │   └── projects/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   └── README.md
├── node_modules/
└── .gitignore
```

## Frontend

Everything related to UI, routing, styling, static images, browser behavior, and the portfolio page lives in `frontend`.

Main frontend files:

- `frontend/src/main.jsx`: React entry point.
- `frontend/src/App.jsx`: Router setup and toast provider.
- `frontend/src/pages/Home.jsx`: Assembles the portfolio sections.
- `frontend/src/components/`: Reusable sections and UI components.
- `frontend/src/index.css`: Tailwind theme tokens, animations, and global styles.
- `frontend/public/projects/`: Static project screenshots.

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

Frontend production commands:

```bash
npm run build
npm run preview
```

## Backend

Everything related to APIs, email sending, database work, authentication, and server-side integrations belongs in `backend`.

Current backend files:

- `backend/src/server.js`: Minimal Node.js API server.
- `backend/package.json`: Backend scripts.
- `backend/README.md`: Backend notes.

### Run Backend

```bash
cd backend
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

Health check:

```text
http://localhost:5000/health
```

## Suggested Next Steps

1. Connect `frontend/src/components/ContactSection.jsx` to a backend `POST /contact` endpoint.
2. Add validation in the backend before accepting form data.
3. Add an email provider or database only when you know where contact messages should go.
4. Keep installing frontend packages inside `frontend` and backend packages inside `backend`.
