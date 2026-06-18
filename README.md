# Smart Queue Management System

A full-stack Queue Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with JWT Authentication, Role-Based Access Control, Socket.io Real-Time Updates, Analytics Dashboard, and Queue Monitoring.

---

## 📌 Project Overview

The Smart Queue Management System helps organizations such as hospitals, banks, service centers, and government offices manage customer queues efficiently.

Users can generate digital tokens, track queue status in real time, and receive notifications. Staff members can call and complete tokens, while administrators can monitor analytics and manage counters.

---

## 🚀 Features

### User Features

- User Registration & Login
- JWT Authentication
- Generate Queue Token
- View Queue Status
- Real-Time Updates
- Notification Panel
- Token History

### Staff Features

- Staff Login
- Call Next Token
- Complete Token
- View Queue Status
- Manage Counter Operations

### Admin Features

- Dashboard Analytics
- Manage Users
- Manage Counters
- Queue Monitoring
- Reports & Statistics
- System Management

### Real-Time Features

- Socket.io Integration
- Live Queue Updates
- Instant Token Status Changes
- Notification Broadcasting

---

## 🛠️ Technology Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- Axios
- Socket.io Client
- Chart.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Socket.io

### Database

- MongoDB

### Tools

- VS Code
- Git
- GitHub
- Postman
- MongoDB Compass

---

## 📂 Project Structure

```text
smart-queue-management-system/

├── client/
│
│   ├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TokenCard.jsx
│   │   ├── QueueTable.jsx
│   │   ├── StatsCard.jsx
│   │   ├── NotificationPanel.jsx
│   │   ├── CounterTable.jsx
│   │   ├── UserTable.jsx
│   │   └── TokenManagement.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── UserDashboard.jsx
│   │   ├── StaffDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Analytics.jsx
│   │   └── Reports.jsx
│   │
│   ├── redux/
│   ├── services/
│   ├── socket.js
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   │
│   ├── server.js
│   └── .env
│
└── README.md
