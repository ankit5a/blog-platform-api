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
      unique: true, // enough for index
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

/* TEXT SEARCH INDEX */
postSchema.index({
  title: "text",
  content: "text",
  category: "text",
});

module.exports = mongoose.model("Post", postSchema);
