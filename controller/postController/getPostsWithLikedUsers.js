const postModel = require("../../models/postModel")


const getPostsWithLikedUsers = async (req,res)=>{
    try {
        const result = await postModel.find().populate("likedUsers")
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
module.exports = getPostsWithLikedUsers