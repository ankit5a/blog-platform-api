const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  getPostBySlug,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const { protect, adminOnly } = require("../middleware/auth");

/* PUBLIC */
router.get("/", getPosts);
router.get("/:slug", getPostBySlug);
router.get("/id/:id", getPostById);

/* INTERNAL / ADMIN */
router.post("/", protect, adminOnly, createPost);
router.put("/id/:id", protect, adminOnly, updatePost);
router.delete("/id/:id", protect, adminOnly, deletePost);

module.exports = router;
