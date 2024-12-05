const postModel = require("../../models/postModel");
const likeModel = require("../../models/likeModel")


const like = async (req,res)=>{
    const { likedUser, post } = req.body;
   try {
    await likeModel.create({
      likedUser,
      post,
    });
     await postModel.findByIdAndUpdate(post, {
       $addToSet: {
         likedUsers: likedUser,
       },
     });
     res.send("likedThePost")
   } catch (error) {
    res.send(error)
   }
}
module.exports = like