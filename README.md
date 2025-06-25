# **TrendyLook**  


### **Live Demo:** [TrendyLook](https://trendylook-frontend.vercel.app/)  


## **Overview**  
TrendyLook is a modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse trending fashion styles, view product details, and securely complete purchases.


## 🌟 Features
- Browse trending fashion products with images, prices, and descriptions  
- User authentication (sign up, sign in, JWT-based sessions)  
- Admin panel for product management (CRUD operations)  
- Shopping cart & checkout with order confirmation  
- Responsive UI for mobile and desktop  
- MongoDB Atlas for scalable, cloud database  
- RESTful APIs powered by Express.js & Node.js


## 💻 Tech Stack
| Layer          | Technology             |
|----------------|------------------------|
| Frontend       | React, Redux (optional), Tailwind CSS / CSS-in-JS |
| Backend        | Node.js, Express.js    |
| Database       | MongoDB (Atlas)        |
| Authentication | JSON Web Tokens (JWT), Bycrypt |
| Hosting        | Vercel (frontend), Vercel (backend) |


## **Installation**  
### **1. Clone the repository**  
```bash
git https://github.com/krishna-bata/trendylook.git
cd trendylook
```

### **2. Install dependencies**  
#### **Frontend**  
```bash
cd frontend
npm install
```

#### **Backend**  
```bash
cd backend
npm install
```

### **3. Configure Environment Variables**  
Create a `.env` file in the **backend** directory and add:  
```env
PORT=your_server_port
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the **frontend** directory and add:  
```env
VITE_BACKEND_URL=your_backend_url
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### **4. Start the Application**  
#### **Backend**  
```bash
cd backend
npm run dev
```
#### **Frontend**  
```bash
cd frontend
npm run dev
```


## **API Endpoints**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| POST | /api/orders | Create a new order |
| GET | /api/orders/:id | Get order details |
| POST | /api/payments | Process payments |


## **Upcoming Features**  
🚀 Wishlist functionality to allow users to save favorite products.  
🚀 Product reviews and ratings for better user engagement.      


## **Contributing**  
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.

