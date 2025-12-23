const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

/* TEXT SEARCH + SLUG INDEX */
postSchema.index({ slug: 1 });
postSchema.index({
  title: "text",
  content: "text",
  category: "text",
});

module.exports = mongoose.model("Post", postSchema);
