const { mongoose, Schema } = require("mongoose");
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    postedUserImage: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true },
    comments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
    likedUsers: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  },
  { timeStamps: true }
);

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
