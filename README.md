# Blog API – Node.js, Express & MongoDB

A RESTful Blog API built using **Node.js**, **Express**, and **MongoDB (Atlas)**.
The API supports **SEO-friendly slug-based URLs**, full CRUD operations, and search functionality.

This project follows **real-world backend design patterns**, where:

- **Slugs are the canonical public identifiers**
- **MongoDB IDs are used internally for admin operations**

---

## 🚀 Features

- Create blog posts with **auto-generated unique slugs**
- Fetch blog posts using **slug-based URLs (SEO-friendly)**
- Fetch blog posts using **ID (internal/admin)**
- Get all blog posts
- Search blog posts by title, content, or category
- Update blog posts (slug auto-updates if title changes)
- Delete blog posts
- MongoDB Atlas integration
- Proper REST conventions & HTTP status codes

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **ODM:** Mongoose
- **Tools:** Postman, Git

---

## 📁 Project Structure

```txt
.
├── config/
│   └── db.js
├── controllers/
│   └── postControllers.js
├── models/
│   └── Post.js
├── routes/
│   └── postRoutes.js
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

## 📌 API Endpoints

### ➕ Create Blog Post

**POST** `/posts`

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

🔹 The slug is **automatically generated and stored**
🔹 Slug uniqueness is guaranteed

**Response:** `201 Created`

---

### 📄 Get All Blog Posts

**GET** `/posts`

Returns all blog posts.

**Response:** `200 OK`

---

### 🔍 Search Blog Posts

**GET** `/posts?term=tech`

Searches across:

- title
- content
- category

---

### 🌍 Get Single Blog Post (PUBLIC – Slug-based)

**GET** `/posts/:slug`

Example:

```
/posts/my-first-blog-post
```

This is the **canonical public endpoint** used by the frontend and for SEO.

**Response:** `200 OK` or `404 Not Found`

---

### 🛠 Get Single Blog Post (INTERNAL – ID-based)

**GET** `/posts/id/:id`

Example:

```
/posts/id/694821893e46e12943c5e0cb
```

Used for admin/debug purposes.

---

### ✏️ Update Blog Post (INTERNAL)

**PUT** `/posts/id/:id`

```json
{
  "title": "Updated Blog Title",
  "content": "Updated content",
  "category": "Technology",
  "tags": ["Node", "MongoDB"]
}
```

🔹 If the title changes, the slug is **automatically regenerated**
🔹 Slug uniqueness is preserved

**Response:** `200 OK`

---

### ❌ Delete Blog Post (INTERNAL)

**DELETE** `/posts/id/:id`

**Response:** `204 No Content`

---

## 🔑 Slug Behavior (Important)

- Slugs are generated from the title
- Slugs are **URL-safe and lowercase**
- Slugs are **unique**
- Duplicate titles generate slugs like:

  ```
  how-to-learn-node
  how-to-learn-node-1
  how-to-learn-node-2
  ```

- Slugs are the **primary public identifier**
- MongoDB `_id` is used internally only

---

## 🧠 Learning Outcomes

- RESTful API design with Express
- Slug-based URL architecture (SEO-friendly)
- MongoDB CRUD operations
- Text search with MongoDB indexes
- Separation of public vs internal routes
- Proper error handling & status codes
- Clean project structure

---

## 🔮 Future Improvements

- Pagination
- Cursor-based pagination (infinite scroll)
- Authentication & authorization
- API rate limiting
- Slug history & redirects (SEO-safe)
- Deployment (Render / Railway)

---

## 👨‍💻 Author

**Ankit Anand**

---

## ⭐️ If you like this project

Give it a ⭐️ on GitHub and feel free to fork it!
