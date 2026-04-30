# 🐉 Dragon News

Dragon News is a modern news web application built with **Next.js**, delivering fast, SEO-friendly, and responsive news content with dynamic routing and server-side capabilities.

---

## 🌐 Live Demo

🔗 https://dragon-news-beige.vercel.app/

---

## 📖 Overview

Dragon News is a **server-rendered news platform** that fetches and displays categorized news content using a REST API. Built with Next.js, it leverages hybrid rendering (SSR/SSG) to optimize performance and SEO.

---

## 🚀 Key Features

### 📰 News Aggregation

* Fetches real-time news data from external API
* Displays structured news lists by category

### 📂 Dynamic Category Routing

* URL-based category pages:

```id="snip1"
/category/[id]
```

### 📄 News Details Pages

* Dynamic routing for each article:

```id="snip2"
/news/[id]
```

### ⚡ Next.js Rendering

* Server-Side Rendering (SSR) for fresh content
* Static Generation (SSG) where applicable
* Incremental Static Regeneration (optional)

### 🔍 SEO Optimization

* Meta tags per page
* Fast page load via pre-rendering

### 📱 Responsive UI

* Fully optimized for all screen sizes

### 🔐 Authentication (if implemented)

* Firebase / NextAuth integration
* Protected routes

---

## 🧱 Architecture

### 🔷 High-Level Flow

```id="arch2"
Next.js App
   │
   ├── Pages (Routing Layer)
   │
   ├── Data Fetching (SSR / SSG)
   │
   ▼
External News API
```

---

## 📂 Project Structure (Next.js)

```id="struct2"
dragon-news/
│── public/
│── src/
│   ├── app/              # (App Router if using Next 13+)
│   ├── pages/            # (If using Pages Router)
│   ├── components/
│   ├── layouts/
│   ├── lib/              # API utilities
│   ├── hooks/
│   ├── styles/
│   └── utils/
│── next.config.js
│── package.json
│── README.md
```

---

## 📡 API Integration

Base API:

```id="api5"
https://openapi.programming-hero.com/api
```

### Endpoints Used

* `/news/categories` → Fetch categories
* `/news/category/{id}` → Category news
* `/news/{id}` → News details

---

## 🛠️ Tech Stack

### Core

* Next.js
* React
* JavaScript / TypeScript (if used)

### Styling

* Tailwind CSS / CSS Modules

### Auth (Optional)

* Firebase Auth / NextAuth.js

### Deployment

* Vercel (optimized for Next.js)

---

## ⚙️ Installation

### Clone Repo

```bash id="inst5"
git clone https://github.com/joygoswaminiloy2023-droid/Dragon_News.git
cd Dragon_News
```

### Install Dependencies

```bash id="inst6"
npm install
```

---

## ▶️ Run Locally

```bash id="inst7"
npm run dev
```

Open:

```id="inst8"
http://localhost:3000
```

---

## 🏗️ Build & Production

```bash id="inst9"
npm run build
npm start
```

---

## 🔑 Environment Variables

Create `.env.local`:

```id="env2"
NEXT_PUBLIC_API_URL=https://openapi.programming-hero.com/api
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
```

---

## 🔐 Authentication Flow (if implemented)

* User logs in via Firebase / NextAuth
* Session handled via cookies/JWT
* Protected pages use server/client guards

---

## ⚡ Performance Benefits (Next.js)

* Automatic code splitting
* Image optimization (`next/image`)
* Server-side rendering
* Edge deployment via Vercel

---

## 📱 Routing System

### Example Routes

```id="routes1"
/                 → Homepage  
/category/[id]    → Category page  
/news/[id]        → News details  
/login            → Auth page  
```

---

## 🐞 Known Issues

* API response delays
* Some news items missing fields
* SEO can be improved with structured data

---

## 📈 Future Improvements

* Bookmark system
* Comment section
* Dark mode
* PWA support
* AI-based news recommendations

---

## 🤝 Contributing

1. Fork repository
2. Create a branch
3. Commit changes
4. Push and open PR

---

## 📄 License

MIT License

---

## 👨‍💻 Author

GitHub: https://github.com/joygoswaminiloy2023-droid

---

## ⭐ Acknowledgements

* Programming Hero API
* Next.js ecosystem
* Vercel platform

---

## 💡 Final Note

This project showcases how **Next.js can be used to build fast, SEO-friendly, and scalable content platforms**. It serves as a strong foundation for real-world news or content-driven applications.
