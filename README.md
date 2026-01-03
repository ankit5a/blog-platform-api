# Blog API – Node.js, Express & MongoDB

A RESTful Blog API built using **Node.js**, **Express**, and **MongoDB (Atlas)**.

The API supports **SEO-friendly slug-based URLs**, **JWT-based authentication**, **role-based authorization**, full CRUD operations, and search functionality.

This project follows **real-world backend design patterns**, where:

- **Slugs are the canonical public identifiers**
- **MongoDB IDs are used internally for admin operations**
- **Protected routes require authentication**
- **Admin-only actions are enforced via authorization**

---

## 🚀 Features

### 📝 Blog Features

- Create blog posts with **auto-generated unique slugs**
- Fetch blog posts using **slug-based URLs (SEO-friendly)**
- Fetch blog posts using **ID (internal/admin)**
- Get all blog posts
- Search blog posts by title, content, or category
- Update blog posts (slug auto-updates if title changes)
- Delete blog posts

### 🔐 Authentication & Authorization

- User registration & login
- Password hashing using **bcrypt**
- JWT-based authentication
- Role-based access control:

  - `user`
  - `admin`

- Protected admin routes
- Public vs internal route separation

### 🧱 Infrastructure

- MongoDB Atlas integration
- Mongoose schema validation & indexing
- Proper REST conventions & HTTP status codes

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **ODM:** Mongoose
- **Authentication:** JWT, bcrypt
- **Tools:** Postman, Git

---

## 📁 Project Structure

```txt
.
├── config/
│   └── db.js
├── controllers/
│   ├── postControllers.js
│   └── authController.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── Post.js
│   └── User.js
├── routes/
│   ├── postRoutes.js
│   └── authRoutes.js
├── utils/
│   └── slug.js
├── .env
├── .gitignore
├── server.js
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
```

⚠️ **Never commit `.env` to GitHub**

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the server

```bash
npm run dev
```

or

```bash
node server.js
```

Server will start at:

```
http://localhost:3001
```

---

## 🧪 Test API Using Postman

### Base URL

```
http://localhost:3001
```

---

## 🔐 Authentication Endpoints

### 📝 Register User

**POST** `/auth/register`

```json
{
  "name": "Ankit",
  "email": "ankit@example.com",
  "password": "password123"
}
```

**Response:** `201 Created`

---

### 🔑 Login User

**POST** `/auth/login`

```json
{
  "email": "ankit@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN_HERE"
}
```

---

### 🧪 Using Token in Postman

Add header:

```
Authorization: Bearer <JWT_TOKEN>
```

Required for **protected/admin routes**.

---

## 📌 Blog API Endpoints

### 🌍 Get Single Blog Post (PUBLIC – Slug-based)

**GET** `/posts/:slug`

Example:

```
/posts/my-first-blog-post
```

✅ Public
✅ SEO-friendly
✅ No authentication required

---

### 📄 Get All Blog Posts

**GET** `/posts`

---

### 🔍 Search Blog Posts

**GET** `/posts?term=tech`

Searches across:

- title
- content
- category

---

### 🛠 Get Single Blog Post (ADMIN – ID-based)

**GET** `/posts/id/:id`

🔐 Requires authentication
🛡 Admin only

---

### ➕ Create Blog Post (ADMIN)

**POST** `/posts`

🔐 Requires authentication
🛡 Admin only

---

### ✏️ Update Blog Post (ADMIN)

**PUT** `/posts/id/:id`

🔐 Requires authentication
🛡 Admin only
🔁 Slug auto-updates if title changes

---

### ❌ Delete Blog Post (ADMIN)

**DELETE** `/posts/id/:id`

🔐 Requires authentication
🛡 Admin only

---

## 🔑 Slug Behavior (Important)

- Slugs are generated from the title
- Slugs are lowercase and URL-safe
- Slugs are unique
- Duplicate titles generate:

  ```
  how-to-learn-node
  how-to-learn-node-1
  how-to-learn-node-2
  ```

- Slugs are the **primary public identifier**
- MongoDB `_id` is used internally only

---

## 🧠 Learning Outcomes

- JWT-based authentication in Express
- Role-based authorization (RBAC)
- Secure password handling with bcrypt
- Slug-based URL architecture (SEO-friendly)
- MongoDB indexing & text search
- Clean separation of public vs protected routes
- Scalable backend project structure

---

## 🔮 Future Improvements

- Pagination & cursor-based pagination
- Refresh tokens
- API rate limiting
- Slug history & redirects (SEO-safe)
- User profile management
- Deployment (Render / Railway)

---

## 👨‍💻 Author

**Ankit Anand**

---

## ⭐️ If you like this project

Give it a ⭐️ on GitHub and feel free to fork it!
