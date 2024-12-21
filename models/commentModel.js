const { mongoose ,Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    commentedPostId: { type: mongoose.Types.ObjectId, required: true },
  },
  { timestamps: true }
);
const commentModel = mongoose.model("comments",commentSchema)
module.exports = commentModel