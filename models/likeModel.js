const { Schema, mongoose } = require("mongoose");

const likeSchema = new Schema({
  likedUser: ({ type: mongoose.Types.ObjectId,ref:"users",requied:true }),
  post: { type: mongoose.Types.ObjectId , required:true},
},
{timeStamps:true}
);
const likeModel = mongoose.model("likes",likeSchema)
module.exports = likeModel