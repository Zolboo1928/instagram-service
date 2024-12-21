const { mongoose, Schema } = require("mongoose");
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    postImages:[{type: String }],
    userId: { type: mongoose.Types.ObjectId, required: true,ref:"users" },
    comments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
    likedUsers: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  },
  { timestamps :true}
);

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
