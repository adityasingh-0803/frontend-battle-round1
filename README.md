# 🛠️ Frontend Battle — Replicate & Innovate

Live Demo 👉 [frontendbat.netlify.app](https://frontendbat.netlify.app)

A responsive, modern, and interactive single-page web application built as a challenge entry for **Frontend Battle Round 1**. This project replicates a complex UI layout using provided media assets and enriches it with enhancements like dark mode, animated loaders, video showcase, and responsiveness.

---

## ✨ Features Overview

### 🔹 1. Animated Loader
- A fullscreen animated loader (`loader.mp4`) is shown on page load for 2.5 seconds.
- Implementation: uses `<video autoPlay muted loop>` inside a conditional render block with `useEffect` for delay.

### 🔹 2. Sticky Navigation Bar
- Navbar with 4 sections: `Home`, `Features`, `Showcase`, `Contact`.
- Stays at the top of the viewport using `sticky` and `z-50`.
- Dark mode toggle (Sun/Moon icons) integrated using `lucide-react`.

### 🔹 3. Hero Section (Replicate & Innovate)
- Background image: `/assets/stats.png`.
- Overlay box with semi-transparent black background (`bg-black bg-opacity-60`) for strong readability.
- Positioned at the top using `pt-24` and centered via `flex justify-center`.

### 🔹 4. Features Section
- Six interactive feature cards displayed using Tailwind Grid.
- Each card shows:
  - Title (e.g. `Ripple Effects`, `Cards Layout`)
  - Image (`/assets/cards.png`)
  - Description of implementation details.
- Fully responsive from mobile to desktop.

### 🔹 5. Showcase Section
- Four embedded videos:
  - `features-services.mp4`
  - `homepage.mp4`
  - `scroll and pop up.mp4`
  - `ripple effect.mp4`
- Video cards show a poster, play on click, and have clear titles.
- Responsive layout in 2-column grid on desktop, 1-column on mobile.

### 🔹 6. Contact Section
- Simple, centered message encouraging users to reach out post-submission.

---

## 🌗 Dark Mode Support

- Toggled via button in the navbar (Sun/Moon icon).
- Dynamically changes text, background, and card styles.
- Tailwind dark mode classes used throughout (`dark:bg-...`, `dark:text-...`).

---

## 📁 Project Structure


frontend-battle-round1/
├── public/
│ └── assets/
│ ├── loader.mp4
│ ├── stats.png
│ ├── cards.png
│ ├── features-services.mp4
│ ├── homepage.mp4
│ ├── scroll and pop up.mp4
│ └── ripple effect.mp4
├── src/
│ ├── FrontendBattlePage.jsx # Main page with all sections
│ ├── main.jsx # App entry point
│ └── index.css # Tailwind styling
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md # You're reading it!

---

## 🧩 Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **Lucide Icons**
- Deployed with **Netlify**

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/frontend-battle-round1.git
cd frontend-battle-round1
npm install
npm run dev
```
Developer:Aditya Singh 
Challenge:Frontend Battle Round-1
