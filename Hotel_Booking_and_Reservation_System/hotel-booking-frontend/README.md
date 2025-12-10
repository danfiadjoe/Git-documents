Here’s a **README.md draft** for your hotel booking application based on everything we’ve built so far. It captures the project setup, features, and usage instructions in a professional format:

---

```markdown
# Hotel Booking & Reservation System

A full‑stack hotel booking application built with **React (frontend)**, **Express/Node.js (backend)**, and **MySQL (database)**.  
The system supports user authentication, role‑based access (admin vs. user), hotel and room management, and booking functionality.

---

## 🚀 Features

- **Authentication**

  - User registration & login with JWT tokens
  - Role‑based access control (admin vs. user)

- **Hotels**

  - View all hotels (public)
  - View single hotel details
  - Add new hotels (admin only)

- **Rooms**

  - View rooms for a specific hotel
  - Add new rooms (admin only)

- **Bookings**

  - Book a room with check‑in/check‑out dates
  - Store bookings in MySQL
  - View bookings per user

- **Dashboard**

  - User dashboard to view bookings
  - Admin dashboard to manage hotels and rooms

- **UI**
  - Responsive design with Tailwind CSS
  - Clean layout for hotel details and booking flow

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Auth**: JWT (JSON Web Tokens)
- **Hosting (planned)**: Netlify (frontend), Render (backend), PlanetScale (database)

---

## 📂 Project Structure
```

hotel-booking-app/
├── backend/
│ ├── index.js # Express server entry
│ ├── routes/
│ │ ├── hotels.js # Hotel routes
│ │ ├── rooms.js # Room routes
│ │ └── bookings.js # Booking routes
│ ├── middleware/
│ │ ├── verifyToken.js
│ │ └── authorizeRole.js
│ └── db.js # MySQL connection
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── HotelDetails.js
│ │ ├── pages/
│ │ ├── utils/
│ │ │ └── axiosInstance.js
│ │ └── App.js
│ └── package.json

````

---

## ⚙️ Setup Instructions

### Backend
1. Navigate to backend folder:
   ```bash
   cd backend
   npm install
````

2. Create `.env` file:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=hotel_booking
   JWT_SECRET=yourjwtsecret
   PORT=5000
   ```
3. Start server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to frontend folder:
   ```bash
   cd frontend
   npm install
   ```
2. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
3. Start React app:
   ```bash
   npm start
   ```

---

## 📖 Usage

- Visit `http://localhost:3000` for frontend.
- Register/login to access booking features.
- Admin can add hotels and rooms.
- Users can view hotels, rooms, and book rooms with dates.

---

## ✅ Next Steps (Deployment Plan)

- Deploy backend to **Render**.
- Deploy frontend to **Netlify**.
- Host MySQL database on **PlanetScale**.
- Update `axiosInstance.js` to use live backend URL.

---

## 👨‍💻 Contributors

- Built by: _Daniel Fiadjoe_
- Location: Clarenville, Newfoundland and Labrador, Canada

---

```

---

This README gives you a professional project overview, setup guide, and deployment plan.

👉 Would you like me to also add a **“Demo Flow” section** (screenshots or step‑by‑step user journey: login → view hotel → book room → dashboard) so anyone reading your README can quickly understand how the app works?
```
