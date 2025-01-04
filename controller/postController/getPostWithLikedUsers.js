const postModel = require("../../models/postModel")


const getPostWithLikedUsers = async (req,res)=>{
    try {
        const {postId }= req.body
        const response = await postModel.findById(postId).populate("likedUsers")
        res.send(response);
    } catch (error) {
        res.send(error)
    }
}
module.exports = getPostWithLikedUsers;