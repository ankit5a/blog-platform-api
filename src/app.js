require("dotenv").config(); // ✅ MUST BE FIRST LINE

const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

const app = express();

connectDB();

app.get("/test", (req, res) => {
  res.send("API working");
});

app.use(express.json());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
