const postModel = require("../models/postModel")

const dislike = async (req,res)=>{
 try {
       const{dislikerId, postId} = req.body
       await postModel.findByIdAndUpdate(postId, {
         $pull: {
           likedUsers: dislikerId
         },
       });
       res.send("disliked")
 } catch (error) {
    res.send(error)
 }
}
module.exports = dislike