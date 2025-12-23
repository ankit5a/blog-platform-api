const Post = require("../models/Post");

/* GENERATE SLUT */
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

/* CREATE POST */
exports.createPost = async (req, res) => {
  try {
    const { title } = req.body;

    const slug = generateSlug(title);

    const existingPost = await Post.findOne({ slug });
    if (existingPost) {
      return res
        .status(400)
        .json({ message: "Post with this title already exists" });
    }

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

/* GET POST BY SLUG */
exports.getPostBySlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(post);
};

/* UPDATE POST */
exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
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
