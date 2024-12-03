const postModel = require("../models/postModel")

const getComments = async (req,res)=>{
   try {
     const allPostsWithComments = await postModel.find().populate("comments")
     res.send(allPostsWithComments)
   } catch (error) {
    res.send(error)
   }
}
module.exports = getComments