const { mongoose, Schema } = require("mongoose");
const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String },
    posts: [{ type: mongoose.Types.ObjectId, ref: "posts" }],
    following: [{ type: mongoose.Types.ObjectId , ref:"users"}],
    followers: [{ type: mongoose.Types.ObjectId , ref:"users"}],
  }
);

const userModel = mongoose.model("users", userSchema)
module.exports = userModel 
