const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * @typedef {Object} IUser
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {"user" | "admin"} role
 * @property {(enteredPassword: string) => Promise<boolean>} comparePassword
 */

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

/** @type {mongoose.Model<IUser>} */
const User = mongoose.model("User", userSchema);
module.exports = User;
