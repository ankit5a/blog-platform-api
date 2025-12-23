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

router.get("/id/:id", getPostById);
router.get("/slug/:slug", getPostBySlug);

router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
