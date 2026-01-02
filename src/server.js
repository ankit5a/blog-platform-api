require("dotenv").config(); // ✅ MUST BE FIRST LINE

const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.get("/test", (req, res) => {
  res.send("API working");
});

app.use(express.json());
app.use("/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
