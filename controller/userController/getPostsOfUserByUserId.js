const userModel = require("../../models/userModel")

const getPostsOfUserByUserId = async (req,res)=>{
  try {
      const {userId} = req.body
      const userWithPosts = await userModel.findById(userId).populate("posts")
      res.send(userWithPosts)
  } catch (error) {
    res.send(error)
  }
}
module.exports = getPostsOfUserByUserId