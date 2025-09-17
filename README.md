# 📊 Dashboard Project

A responsive dashboard application built for the **BOD Frontend Developer Hiring Quest**.  
This project demonstrates **modern React development** with real backend integration, **JWT authentication**, and **comprehensive data management**.

---

## 🚀 Setup Instructions

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### ⚡ Installation

1. **Clone the repository**
```bash
git clone https://github.com/AhmedSoliman-Git/Dashboard.git
cd Dashboard

Frontend Setup :
# Navigate to frontend folder
cd frontend
npm install
npm run dev

Backend Setup : 
# Open new terminal and navigate to backend
cd backend
npm install

Access the application:
Frontend: http://localhost:5173
Backend: http://localhost:8080

✨ Features List
🔹 Core Features

📱 Responsive Dashboard Layout - Built with Tailwind CSS and custom CSS

📂 Responsive Sidebar - Collapsible sidebar with burger icon and navigation links

📝 Data Table Management - View, edit, and delete data items

➕ Add Items Button - Easy item creation with form validation

📋 Comprehensive Forms - Fields: Stock, Title, Price, Status, and Image

⏳ Loading States - Indicators for forms and API calls

🔔 Toast Notifications - Success, error, delete, and edit notifications

🔹 Technical Features

⚛️ State Management - React Redux with Redux Toolkit

📊 Statistics Component - Custom SVG Pie & Line charts

🌐 Real API Integration - Node.js Express backend

🔑 JWT Authentication - Route authorization with tokens

💾 Token Management - Stored in localStorage + logout functionality

🔐 Login System - Sign up, login, and error notifications

🛠️ Error Handling - Route-level error boundaries

📑 Pagination - 10 items per page

📱 Responsive Design - Optimized for mobile, tablet, and desktop

🔗 API Endpoints Used
Endpoint	Method	Purpose	Auth
/login	POST	User login	❌ No
/signup	POST	Create account	❌ No
/events	GET	Fetch all items	✅ JWT
/events/:id	PUT	Edit item	✅ JWT
/events/:id	DELETE	Delete item	✅ JWT
🛡️ API Features

JWT Authentication - Protected routes with token validation

Error Handling - Clear error messages

Data Validation - Backend input validation

CORS Support - Cross-origin enabled

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS

State Management: Redux Toolkit

Backend: Node.js, Express.js

Authentication: JWT (JSON Web Tokens)

Notifications: React Toastify (or similar)

Storage: localStorage

Charts: Custom SVG components

📘 Usage Guide
🔑 Authentication

Login → Use existing credentials or sign up

Token Storage → JWT saved to localStorage

Logout → Clears token & redirects to login

🖥️ Dashboard Features

View Items → Paginated table (10 per page)

Add Item → With validation

Edit Item → Update existing data

Delete Item → Confirmation dialog before deleting

Responsive Navigation → Burger menu on mobile

📱 Mobile Experience

Collapsible sidebar

Touch-friendly buttons and forms

Optimized tables for mobile

🌟 Project Highlights

🔗 Full-Stack Implementation - Real backend, not mock APIs

🎨 Modern UI/UX - Smooth and professional interface

🔒 Security-First - JWT-protected routes

⚡ Performance Optimized - Efficient state and rendering

🧩 Reusable Components - Clean and structured code

✅ Error Handling & Loading States - Better user experience
npm start

