const userModel = require("../../models/userModel")


const getPost = async (req,res)=>{
   try {
     const usersWithPosts = await userModel.find().populate("posts")
     res.send(usersWithPosts)
   } catch (error) {
    res.send(error)
   }
}

module.exports = getPost