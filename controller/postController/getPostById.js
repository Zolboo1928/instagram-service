const postModel = require("../../models/postModel");


const getPostById = async(req,res)=>{
    try {
        const {postId }= req.params
        const post = await postModel.findById(postId).populate("comments");
        res.send(post)
    } catch (error) {
        res.send(error)
    }
}
module.exports = getPostById