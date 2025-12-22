
# Blog API – Node.js, Express & MongoDB

A simple RESTful API for a personal blogging platform built using **Node.js**, **Express**, and **MongoDB (Atlas)**.  
This project supports full CRUD operations along with search functionality.

---

## 🚀 Features

- Create a blog post
- Get all blog posts
- Get a single blog post
- Update a blog post
- Delete a blog post
- Search blog posts by title, content, or category
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
├── .env
├── .gitignore
├── server.js
└── package.json
````

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

**Response:** `201 Created`

---

### 📄 Get All Blog Posts

**GET** `/posts`

**Response:** `200 OK`

---

### 🔍 Search Blog Posts

**GET** `/posts?term=tech`

Searches in:

* title
* content
* category

---

### 📄 Get Single Blog Post

**GET** `/posts/:id`

Example:

```
/posts/694821893e46e12943c5e0cb
```

**Response:** `200 OK` or `404 Not Found`

---

### ✏️ Update Blog Post

**PUT** `/posts/:id`

```json
{
  "title": "Updated Blog Title",
  "content": "Updated content",
  "category": "Technology",
  "tags": ["Node", "MongoDB"]
}
```

**Response:** `200 OK`

---

### ❌ Delete Blog Post

**DELETE** `/posts/:id`

**Response:** `204 No Content`

---

## 🧠 Learning Outcomes

* Understanding RESTful API design
* Using Express routing & controllers
* MongoDB CRUD operations
* Query filtering using regex
* Proper error handling & status codes
* MongoDB Atlas integration

---

## 🔮 Future Improvements

* Slug-based URLs
* Pagination
* Authentication & authorization
* API rate limiting
* Deployment (Render / Railway)

---

## 👨‍💻 Author

**Ankit Anand**

---

## ⭐️ If you like this project

Give it a ⭐️ on GitHub and feel free to fork it!

```

---

## ✅ Next steps (optional but powerful)
If you want, I can:
- Add **slug-based URLs**
- Add **pagination**
- Add **deployment guide**
- Improve **error handling middleware**

Just tell me 🚀
```
