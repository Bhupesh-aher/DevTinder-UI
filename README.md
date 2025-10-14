# 💼 🧑‍💻 DevTinder the social developer connection platform 

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Redux-State_Management-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-skyblue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Socket.io-Realtime-black?style=for-the-badge" />
</p>

<p align="center">
  🚀 <b>DevTinder</b> — a Tinder-style networking platform for developers to connect, chat, and collaborate in real-time.  
  <br/>
  <a href="https://dev-tinder-ui-mu.vercel.app/" target="_blank"><b>🌐 Live Demo</b></a> | 
</p>

---

## 🧩 Overview

**DevTinder Frontend** is a responsive, interactive React app that connects to the **DevTinder Backend** API.  
It allows users to register, explore developers, send connection requests, and chat live — powered by **Socket.io** and **Redux Toolkit** for state management.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | React.js (Vite) |
| **State Management** | Redux Toolkit |
| **Styling** | Tailwind CSS |
| **Real-Time Communication** | Socket.io Client |
| **API Requests** | Axios |
| **Routing** | React Router DOM |
| **Notifications** | React Toastify |
| **Hosting** | Vercel |

---

## ✨ Core Features

✅ **Authentication (Login / Register)** with JWT tokens  
✅ **Dynamic Developer Feed** — Swipe-style connections  
✅ **Real-Time Chat System** with Socket.io  
✅ **Live Connection Updates** (send, receive, accept requests instantly)  
✅ **Profile Page** with editable skills, experience, and about info  
✅ **Global Redux State** for user, chat, and connections  
✅ **Protected Routes** — Auto redirect to login if token missing  
✅ **Dark Mode Ready** (extendable via Tailwind)  
✅ **Fully Responsive UI** — Optimized for mobile & desktop

---

## 🧱 Folder Structure

```

DevTinder-Frontend/
┣ src/
┃ ┣ components/       → Reusable UI components (Navbar, ChatBox, etc.)
┃ ┣ features/         → Redux slices (auth, users, chat, etc.)
┃ ┣ pages/            → All route pages (Login, Register, Home, Chat)
┃ ┣ utils/            → Helper utilities (date formatting, etc.)
┃ ┣ api/              → Axios instance setup
┃ ┣ socket.js         → Socket.io client connection
┣ public/
┣ .env
┣ vite.config.js
┣ tailwind.config.js
┗ README.md

````

---

## 🔌 Environment Variables

Create a `.env` file in the root of your project:

```bash
# Local Development
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000

# Production (Vercel)
VITE_API_BASE_URL_PROD=https://devtinder-backend.onrender.com/api
VITE_SOCKET_URL_PROD=https://devtinder-backend.onrender.com
````

Your **axiosInstance.js** will automatically pick the right one:

```js
const baseURL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL
    : import.meta.env.VITE_API_BASE_URL_PROD;
```

---

## 🚀 Getting Started

```bash
# 1️⃣ Clone the repo
git clone https://github.com/<your-username>/DevTinder-Frontend.git
cd DevTinder-Frontend

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run locally
npm run dev

# 4️⃣ Build for production
npm run build
```

---

## 🔐 Authentication Flow

1. User registers or logs in via `/api/auth`
2. JWT token is saved in localStorage
3. Axios adds token to every protected API call automatically
4. Redux persists user session across refresh

---

## ☁️ Deployment

| Service           | Purpose          |
| ----------------- | ---------------- |
| **Vercel**        | Frontend hosting |
| **Render**        | Backend hosting  |
| **MongoDB Atlas** | Database         |
| **Socket.io**     | Real-time chat   |

---

## 🧭 Future Enhancements

* Add message read receipts
* Typing indicators in chat
* Swipe-style matching UI
* Developer badges based on skills
* Global search across users

---

## 🧑‍💻 Author

**Bhupesh Aher**
🔗 [GitHub Profile](https://github.com/Bhupesh-aher)

---

## 📸 Screenshots (Comming Soon)


✅ Once you’ve pasted this into your **DevTinder Frontend repo**, I’ll send you the **next one for WearWell** (React + Strapi + Redux + Stripe).
```
