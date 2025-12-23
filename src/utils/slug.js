const Post = require("../models/Post");

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const generateUniqueSlug = async (title) => {
  const baseSlug = generateSlug(title);
  let slug = baseSlug;
  let count = 1;

  while (await Post.exists({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};

module.exports = {
  generateSlug,
  generateUniqueSlug,
};
