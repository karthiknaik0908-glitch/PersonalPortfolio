# 🚀 Karthik Janardhan Naik — Personal Portfolio (Full-Stack)

A modern, production-ready, full-stack Personal Portfolio Website built for **Karthik Janardhan Naik**, a Computer Science Engineering student at **Canara Engineering College, Mangalore**.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) + [Tailwind CSS](https://tailwindcss.com/) + [Lucide React](https://lucide.dev/)
- **Backend**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) (REST APIs)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas) with [Mongoose](https://mongoosejs.com/) ODM
- **Validation & Security**: [express-validator](https://express-validator.github.io/docs/), [Helmet](https://helmetjs.github.io/), and [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- **Deployment Ready**:
  - **Frontend**: Configured for [Vercel](https://vercel.com/) with SPA rewrites (`frontend/vercel.json`)
  - **Backend**: Configured for [Render](https://render.com/) (`backend/server.js`)

---

## ✨ Features

1. **Home / Hero**: 
   - Welcome badge, full name (`Karthik Janardhan Naik`), tagline, and introduction highlighting Canara Engineering College.
   - Interactive profile card with animated floating tech badges (React, Node & Express, MongoDB Atlas, Java & Python).
   - Direct CTA buttons: **View Projects** (smooth scroll) and **Download Resume** (interactive modal and instant PDF download).
   - Quick statistics strip (Projects, Technologies, Degree, Institution).
   - Social links (GitHub, LinkedIn, Email, LeetCode) configured with clean placeholders.

2. **About**:
   - Comprehensive background introduction and formal **Career Objective**.
   - 4 Core Engineering Competency Pillars (Full-Stack Web, Algorithmic Problem Solving, Database & Cloud, Clean Code Practices).
   - Academic spotlight for Canara Engineering College, Mangalore.

3. **Technical Skills**:
   - Categorized cards for **11 Core Technologies**:
     - **Languages**: C, Python, Java, JavaScript
     - **Frontend**: React, HTML, CSS
     - **Backend & Database**: Node.js, MongoDB, Firebase
     - **Tools**: Git
   - Interactive category filter tabs (All, Languages, Frontend, Backend & Database, Tools).
   - Proficiency badges and practical descriptions.

4. **Featured Projects**:
   - **SmartShop AI**: Intelligent retail & smart commerce assistant with price comparisons, store tracking, and conversational AI.
   - **MediQueue**: Real-time healthcare & OPD token queue management system reducing hospital wait-room congestion.
   - **Medicine Availability Finder**: Geolocation-powered neighborhood pharmacy locator using GPS distance calculation (Haversine formula), stock tracking, and Google Maps directions.
   - Each project card includes description, key feature bullet points, technology pills, and direct GitHub / Demo links.

5. **Education**:
   - **Bachelor of Engineering (B.E.) in Computer Science and Engineering**
   - **Canara Engineering College**, Benjanapadavu, Bantwal, Mangalore, Karnataka.
   - Degree timeline, key highlights, and relevant coursework pills (Data Structures, Algorithms, DBMS, Operating Systems, Networks, Software Engineering).

6. **Contact (Full-Stack Real Working Form)**:
   - Form fields: Name, Email, Subject, Message.
   - Client-side real-time validation with visual feedback.
   - Dispatches `POST` request to Express backend (`/api/contact`).
   - Server-side validation via `express-validator`.
   - Stores submissions directly in **MongoDB Atlas** (with an automatic in-memory fallback during local testing if credentials are not yet configured).
   - Success state returns confirmation and reference ID.

7. **Downloadable PDF Resume**:
   - Real, authentic vector PDF resume generated at `frontend/public/Karthik_Janardhan_Naik_Resume.pdf`.
   - Interactive in-app modal allows preview or one-click download.

8. **Footer**:
   - Quick navigation links, social profile links, technology stack credits, and smooth "Back to top" button.

---

## 📁 Project Structure

```text
antigravity/
├── backend/                        # Node.js + Express + MongoDB Atlas Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js               # MongoDB connection with graceful Atlas / fallback mode
│   │   ├── controllers/
│   │   │   ├── contactController.js# Handles contact submissions & retrieval
│   │   │   └── healthController.js # API health diagnostics & database state
│   │   ├── middleware/
│   │   │   ├── errorHandler.js     # Centralized error & 404 handlers
│   │   │   └── validateContact.js  # express-validator rules for contact form
│   │   ├── models/
│   │   │   └── ContactMessage.js   # Mongoose model for contact submissions
│   │   └── routes/
│   │       ├── contactRoutes.js    # Routes for /api/contact
│   │       └── healthRoutes.js     # Routes for /api/health
│   ├── .env.example                # Backend environment template
│   ├── .env                        # Local environment file (port, DB URI, CORS)
│   ├── generateResume.js           # PDF resume generator using pdf-lib
│   ├── package.json                # Backend dependencies and scripts
│   └── server.js                   # Express application entry point
│
├── frontend/                       # React + Vite + Tailwind CSS Frontend
│   ├── public/
│   │   ├── favicon.svg             # Custom SVG favicon
│   │   └── Karthik_Janardhan_Naik_Resume.pdf # Downloadable resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx           # Personal intro & career objective
│   │   │   ├── Contact.jsx         # Working contact form & direct info
│   │   │   ├── Education.jsx       # Degree, college info & coursework
│   │   │   ├── Footer.jsx          # Footer with navigation & socials
│   │   │   ├── Hero.jsx            # Hero section, CTA & profile card
│   │   │   ├── Navbar.jsx          # Sticky navbar with live API ping
│   │   │   ├── Projects.jsx        # SmartShop AI, MediQueue, MediFinder
│   │   │   ├── ResumeModal.jsx     # In-app resume viewer & download
│   │   │   ├── Skills.jsx          # Categorized 11 technical skills
│   │   │   └── SocialIcons.jsx     # Clean SVG brand icons (GitHub, LinkedIn)
│   │   ├── data/
│   │   │   └── portfolioData.js    # Centralized portfolio content
│   │   ├── services/
│   │   │   └── api.js              # Fetch client for backend API
│   │   ├── App.jsx                 # Main application component
│   │   ├── index.css               # Tailwind CSS & custom styles
│   │   └── main.jsx                # React DOM entry point
│   ├── .env.example                # Frontend environment template
│   ├── .env                        # Frontend environment file
│   ├── index.html                  # HTML entry point with metadata
│   ├── package.json                # Frontend dependencies and scripts
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tailwind.config.js          # Tailwind styling & colors
│   ├── vercel.json                 # Vercel deployment configuration
│   └── vite.config.js              # Vite configuration with /api proxy
│
├── .gitignore                      # Git ignore rules for node_modules, .env, dist
├── package.json                    # Root scripts to run both apps
└── README.md                       # Documentation & deployment guide
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js** (v18 or higher recommended, tested on v26)
- **npm** (v9 or higher)

### 1. Install Dependencies

You can install dependencies for both frontend and backend using the root script:

```bash
npm run install:all
```

Or individually:

```bash
# In backend directory
cd backend
npm install

# In frontend directory
cd ../frontend
npm install
```

---

### 2. Configure Environment Variables

#### Backend (`backend/.env`):
A template is provided in `backend/.env.example`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

> **Note on MongoDB**: If `MONGODB_URI` contains placeholders or is not configured yet, the backend server will automatically run in **in-memory fallback mode** during local testing. All contact form submissions will be accepted, validated, and logged without crashing the server. Once you supply a real Atlas connection string, messages will be saved directly into MongoDB Atlas.

#### Frontend (`frontend/.env`):
A template is provided in `frontend/.env.example`:

```env
# In development, leave empty to use the Vite proxy defined in vite.config.js
VITE_API_URL=
```

---

### 3. Run the Backend Server

```bash
cd backend
npm run dev
```

The backend server starts on `http://localhost:5000`.
- Health check: `http://localhost:5000/api/health`
- Contact API: `http://localhost:5000/api/contact`

---

### 4. Run the Frontend Development Server

In a new terminal window:

```bash
cd frontend
npm run dev
```

The frontend application will open at `http://localhost:5173`.
The Vite dev server automatically proxies `/api/*` requests to the backend at `http://localhost:5000`.

---

## 🗄️ MongoDB Atlas Setup Guide

To save contact submissions permanently in MongoDB Atlas:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in or create a free account.
2. Create a new **Free Shared Cluster (M0)**.
3. Under **Security** ➔ **Database Access**:
   - Click **Add New Database User**.
   - Create a username and password (e.g. `karthik_admin`). Note this password.
4. Under **Security** ➔ **Network Access**:
   - Click **Add IP Address**.
   - Choose **Allow Access from Anywhere** (`0.0.0.0/0`) so that both your local machine and Render backend can connect.
5. Under **Deployment** ➔ **Database**:
   - Click **Connect** on your cluster.
   - Choose **Drivers** (Node.js).
   - Copy the connection string, which looks like:
     ```text
     mongodb+srv://karthik_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
6. Paste the connection string into `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://karthik_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
7. Restart the backend. The console will log:
   ```text
   ✅ MongoDB Connected successfully [ATLAS]: cluster0-shard-00-00.xxxxx.mongodb.net/portfolio
   ```

---

## 🌐 Deployment Instructions

### 1. Backend Deployment on Render

1. Push your repository to **GitHub**.
2. Log in to [Render](https://render.com/).
3. Click **New +** ➔ **Web Service**.
4. Connect your GitHub repository.
5. Configure the service settings:
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. Add the following **Environment Variables** in Render's dashboard:
   - `NODE_ENV`: `production`
   - `PORT`: `5000` (or leave default for Render's `$PORT`)
   - `MONGODB_URI`: `<Your MongoDB Atlas Connection String>`
   - `CLIENT_URL`: `https://<your-vercel-frontend-domain>.vercel.app`
7. Click **Create Web Service**. Once deployed, copy your Render URL (e.g. `https://karthik-portfolio-backend.onrender.com`).

---

### 2. Frontend Deployment on Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New...** ➔ **Project**.
3. Import your GitHub repository.
4. Set the **Root Directory** to `frontend`.
5. Under **Build and Output Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Under **Environment Variables**:
   - Add `VITE_API_URL` set to your Render backend URL:
     ```text
     VITE_API_URL=https://karthik-portfolio-backend.onrender.com
     ```
7. Click **Deploy**. Vercel will build and deploy your site with SPA rewrites handled by `frontend/vercel.json`.

---

## ✏️ Customizing Personal Details & Placeholders

All personal information, social handles, and project links are centralized in:

📂 `frontend/src/data/portfolioData.js`

You can update any placeholder:
- `email`: Replace with your preferred contact email.
- `phone`: Replace with your contact phone number.
- `github`: Replace with your GitHub profile URL (`https://github.com/<username>`).
- `linkedin`: Replace with your LinkedIn profile URL (`https://linkedin.com/in/<username>`).
- `leetcode`: Replace with your LeetCode or competitive programming profile URL.
- `projectsData[].githubUrl`: Replace with the GitHub repo for each project.
- `projectsData[].demoUrl`: Replace with live deployment links.

To regenerate the PDF resume with updated details, run:
```bash
npm run generate:resume
```

---

## 🧪 Testing Summary

- ✅ **Backend Integration Test**: Verified `GET /api/health` returns status `online`.
- ✅ **Contact Form API Test**: Verified `POST /api/contact` accepts valid submissions with status `201` and rejects invalid inputs with status `400` and granular field messages.
- ✅ **Frontend Build Test**: Verified `npm run build` passes with zero errors (`dist/` bundle created with Tailwind styles and assets).
- ✅ **PDF Resume Generation**: Verified `frontend/public/Karthik_Janardhan_Naik_Resume.pdf` is generated and accessible.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Built with passion by **Karthik Janardhan Naik**, Canara Engineering College, Mangalore.
