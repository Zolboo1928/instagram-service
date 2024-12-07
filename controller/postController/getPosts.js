const postModel = require("../../models/postModel")

const getPosts = async (req,res) =>{
    try {
        const Posts = await postModel.find()
        res.send(Posts)
    } catch (error) {
        res.send(error)
    }
}
module.exports = getPosts