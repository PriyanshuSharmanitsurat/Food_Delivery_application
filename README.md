# 🍔 Food Delivery Application

A full-stack Food Delivery web application built using the **MERN Stack**. Users can browse food items, add them to the cart, place orders, and securely make payments. It also includes an **Admin Dashboard** for managing food items and customer orders.

---

## 🚀 Features

### 👤 User
- User Registration & Login (JWT Authentication)
- Browse food by category
- Search and explore menu
- Add/Remove items from cart
- Place orders
- Online payment integration with Stripe
- View order history
- Responsive UI

### 🛠️ Admin
- Secure Admin Dashboard
- Add new food items
- Upload food images
- Remove food items
- View all orders
- Update order status

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Stripe Payment Gateway

---

## 📁 Project Structure

```
Food_Delivery_Application/
│
├── frontend/      # Customer Website
├── admin/         # Admin Dashboard
└── Backend/       # Express Backend API
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/PriyanshuSharmanitsurat/Food_Delivery_application.git
```

Go to the project directory

```bash
cd Food_Delivery_application
```

---

### 2. Install Backend

```bash
cd Backend
npm install
```

---

### 3. Install Frontend

```bash
cd ../frontend
npm install
```

---

### 4. Install Admin Panel

```bash
cd ../admin
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
```

> ⚠️ Never commit your `.env` file to GitHub.

---

## ▶️ Running the Project

### Start Backend

```bash
cd Backend
npm run server
```

or

```bash
npm start
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

---

### Start Admin Panel

```bash
cd admin
npm run dev
```

---

## 📸 Screenshots

### Home Page

_Add screenshot here_

---

### Food Menu

_Add screenshot here_

---

### Cart

_Add screenshot here_

---

### Admin Dashboard

_Add screenshot here_

---

## 🔐 Authentication

- JWT Based Authentication
- Protected Routes
- User Authorization

---

## 💳 Payment Gateway

Integrated with **Stripe** for secure online payments.

---

## 📦 API Features

- User Authentication
- Food Management
- Cart Management
- Order Management
- Payment Processing

---

## 🌟 Future Improvements

- Email Notifications
- Order Tracking
- Coupon System
- Wishlist
- User Reviews & Ratings
- Dark Mode
- Progressive Web App (PWA)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Priyanshu Sharma**

GitHub: https://github.com/PriyanshuSharmanitsurat

---

⭐ If you like this project, don't forget to **Star** the repository!