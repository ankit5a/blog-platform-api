const Post = require("../models/Post");
const { generateUniqueSlug } = require("../utils/slug");

/* CREATE POST */
exports.createPost = async (req, res) => {
  try {
    const { title } = req.body;

    const slug = await generateUniqueSlug(title);

    const post = await Post.create({
      ...req.body,
      slug,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET ALL POSTS (with search) */
exports.getPosts = async (req, res) => {
  const { term } = req.query;

  const filter = term
    ? {
        $or: [
          { title: { $regex: term, $options: "i" } },
          { content: { $regex: term, $options: "i" } },
          { category: { $regex: term, $options: "i" } },
        ],
      }
    : {};

  const posts = await Post.find(filter);
  res.status(200).json(posts);
};

/* GET SINGLE POST BY ID */
exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(post);
};

/* GET POST BY SLUG (PUBLIC) */
exports.getPostBySlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(post);
};

/* UPDATE POST */
exports.updatePost = async (req, res) => {
  const updates = { ...req.body };

  if (req.body.title) {
    updates.slug = await generateUniqueSlug(req.body.title);
  }

  const post = await Post.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(post);
};

/* DELETE POST */
exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(204).send();
};
