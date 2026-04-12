# Gutech Entrepreneurship Society - Application Form

A beautiful, high-converting membership application form built with React + Tailwind CSS + Node.js.

---

## 📁 Folder Structure

```
entrepreapp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InterestCard.jsx
│   │   │   ├── ToggleButton.jsx
│   │   │   ├── SuccessScreen.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── Manifesto.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── backend/
    ├── server.js
    └── package.json
```

---

## 🚀 How to Run

### 1. Backend (Node.js + Express)

```bash
cd backend
npm install
npm start
# Server runs on http://localhost:4000
```

For development with auto-reload:
```bash
npm run dev
```

### 2. Frontend (React + Vite + Tailwind)

```bash
cd frontend
npm install
npm run dev
# App opens at http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------|--------------------------|
| POST   | /api/apply         | Submit application form  |
| GET    | /api/submissions   | View all submissions     |

### POST /api/apply - Request Body

```json
{
  "name": "Ahmed Ali",
  "whatsapp": "+92 300 0000000",
  "semester": "3",
  "interest": "Tech (Coding / AI)",
  "builtBefore": true,
  "whatBuilt": "A student marketplace app"
}
```

---

## ✨ Features

- Animated progress bar tracking form completion
- Interest selection with visual cards (no dropdown)
- Yes/No built-before toggle with conditional textarea
- Loading state on submit button
- Success screen with spring animation
- Toast notifications (success + error)
- Framer Motion animations throughout
- Fully responsive (mobile + desktop)
- CORS-enabled Express backend
- In-memory submission storage with console logging

---

## 🎨 Design System

- **Primary**: Blue #2563EB
- **Accent**: Amber/Orange #F59E0B
- **Background**: Slate-50 (#F8FAFC)
- **Fonts**: Syne (headings) + DM Sans (body)
- **Radius**: 12px-24px rounded cards
- **Shadows**: Soft blue-tinted shadows
