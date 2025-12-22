const Post = require("../models/Post");

/* CREATE POST */
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
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

/* GET SINGLE POST */
exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);

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
