# Akshita Bhatiya — MERN Stack Developer Portfolio

A multi-page portfolio website built with React.js. Built with proper
components, pages, and React Router — this is **not** a single-page
layout; each page (Home, Projects, Project Detail, About, Contact) is a
real route.

## 📁 Folder Structure

```
portfolio-app/
├── public/
│   ├── index.html            ← HTML entry point
│   └── manifest.json
├── src/
│   ├── components/           ← Reusable UI pieces
│   │   ├── Navbar.jsx          (responsive navbar + mobile toggle)
│   │   ├── Hero.jsx
│   │   ├── TypedLine.jsx       (typing animation)
│   │   ├── ProjectCard.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Tag.jsx
│   │   ├── RevealOnScroll.jsx  (scroll-in animation wrapper)
│   │   └── Footer.jsx
│   ├── pages/                ← Full pages (routes)
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   └── content.js          ← All content is controlled from here
│   │                              (projects, skills; contact info comes
│   │                              from .env, see below)
│   ├── styles/                 ← CSS files, split by component
│   ├── App.jsx                 ← All routes are wired up here
│   └── index.js                ← React app entry point
├── .env                       ← Your personal data (NOT pushed to GitHub)
├── .env.example                ← Template for .env (safe to push)
├── package.json
└── .gitignore
```

## 🔐 Environment variables (important for GitHub)

Personal/private info — your email, GitHub profile link, and location —
is **not hardcoded** in the source code. It's read from a `.env` file at
the project root, which is already listed in `.gitignore`, so it will
**never** be pushed to GitHub.

## 🚀 Running in VS Code (step by step)

### 1. Open the project in VS Code
- Extract the zip file to a folder of your choice.
- In VS Code: `File → Open Folder` → select the extracted `portfolio-app` folder.

### 2. Open the terminal
- Inside VS Code: `Terminal` menu → `New Terminal` (or shortcut: `` Ctrl + ` ``)

### 3. Install dependencies
Run this once, the first time you open the project:
```bash
npm install
```
This creates the `node_modules` folder and installs everything needed
(React, React Router, lucide-react icons).

> **Note:** You need Node.js installed on your machine. If you don't
> have it, install the LTS version from [nodejs.org](https://nodejs.org) first.

### 4. Run the project
```bash
npm start
```
This will:
- Automatically open your browser
- Serve the app at `http://localhost:3000`
- Hot-reload the page whenever you save a file

### 5. Stop the server
Press `Ctrl + C` in the terminal.

## ✏️ Updating your content

The main file to edit: **`src/data/content.js`**

It contains:
- `PROJECTS` — data for all three projects (name, description, GitHub link, live link, features)
- `SKILLS` — your skills list
- `CONTACT` — pulled automatically from `.env` (edit `.env`, not this file, to change your email/GitHub/location)

Any change here automatically reflects across the whole site, since
every page reads from this single file.

## 📤 Pushing this to GitHub

Since `.env` is already in `.gitignore`, your email and personal data
will **not** be included when you push. Just run the usual:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/bhatiyaakshita303/your-repo-name.git
git push -u origin main
```

Anyone cloning your repo will need to create their own `.env` file
(using `.env.example` as a guide) before running `npm start`.

## 🛠 Build for production (for deployment)

When the site is ready to host somewhere (Vercel, Netlify, etc.):
```bash
npm run build
```
This creates a `build` folder with the final optimized files — deploy
that folder. Remember to also set the same environment variables in
your hosting provider's dashboard (e.g. Vercel's "Environment Variables"
settings), since `.env` itself won't be pushed to GitHub.

## 📦 Tech stack used in this portfolio

- React.js (Create React App)
- React Router DOM (multi-page navigation)
- lucide-react (icons)
- Plain CSS (no framework — custom design system using CSS variables)
