# 🚀 URL Shortener App

A clean full-stack application to shorten URLs with optional custom codes and expiration times. Built using **React**, **Node.js**, **Express**, **MongoDB**, and **Material UI (MUI)**.

---

## 🔥 Features

- Shorten any valid URL  
- Optional custom shortcodes (4-12 alphanumeric chars)  
- Set expiration time (default: 30 minutes)  
- Client-side redirection with React Router  
- Custom logging middleware (logs to file, no console.log)  
- Responsive UI styled with Material UI  
- Form validation and error handling  

---

## 🛠 Tech Stack

### Frontend

- React  
- React Router DOM  
- Material UI (MUI)  
- Axios  

### Backend

- Node.js  
- Express  
- MongoDB with Mongoose  
- nanoid (for unique shortcodes)  
- Custom logging middleware  

## ⚙️ Installation & Running the App

### Backend

1. Navigate to the backend folder:
bash
cd Backend
### Install dependencies:
npm install
create a .env filw which includes :

PORT=port_number
MONGO_URI=your_mongodb_connection_string

### Start the server
node index.js or npm run dev
----
###Frontend

1. Navigate to frontend folder
### Install dependencies:
npm install
### Start the server
npm run dev

