const { populate } = require("dotenv");
const postModel = require("../../models/postModel");

const getCommentsOfPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await postModel.findById(postId).populate({
        path:"comments",
        populate:{
            path:"userId"
        }
    });
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};
module.exports = getCommentsOfPost;
