# 📝 MERN Stack To-Do App

A beginner-friendly **To-Do List** application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This app allows users to create, toggle, delete, and view tasks, and also send task lists via email.

---

## 🚀 Features

- ✅ Add new tasks
- 🔄 Toggle task completion
- ❌ Delete tasks
- 📬 Send task list to email
- 📦 MongoDB database integration
- ⚡ Fast and responsive React frontend

---

## 📁 Project Structure
mern-todo-app/
│
├── backend/
│ ├── models/
│ │ └── Task.js
│ ├── routes/
│ │ ├── tasks.js
│ │ └── sendEmail.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── TaskItem.jsx
│ │ └── TodoApp.jsx
│ └── App.jsx
│
└── README.md


---

## 🛠️ Tech Stack

| Layer     | Technology        |
|-----------|-------------------|
| Frontend  | React.js          |
| Backend   | Node.js, Express.js |
| Database  | MongoDB           |
| Email     | Nodemailer + Gmail |

---

## 📦 Installation

### 🔧 1. Clone the Repository

bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app

💻 2. Setup Backend

cd backend
npm install

🌐 Start the server:

nodemon server.js


🌐 3. Setup Frontend
cd ../frontend
npm install
npm start






