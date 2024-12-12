const postModel = require("../../models/postModel");


const getPostById = async(req,res)=>{
    try {
        const {PostId} = req.body
        const post = await postModel.findById(PostId).populate("comments");
        res.send(post)
    } catch (error) {
        res.send(error)
    }
}
module.exports = getPostById