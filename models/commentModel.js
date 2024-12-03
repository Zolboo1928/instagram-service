const { mongoose ,Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    userId: { type: String, required: true , ref:"users"},
    commentedPostId: { type: String, required: true }
  },
  { timeStamps: true }
);
const commentModel = mongoose.model("comments",commentSchema)
module.exports = commentModel