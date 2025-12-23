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

router.post("/", createPost);
router.get("/", getPosts);

/* PUBLIC */
router.get("/:slug", getPostBySlug);

/* INTERNAL / ADMIN */
router.get("/id/:id", getPostById);
router.put("/id/:id", updatePost);
router.delete("/id/:id", deletePost);

module.exports = router;
