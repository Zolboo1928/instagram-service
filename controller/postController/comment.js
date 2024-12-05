const commentModel = require("../../models/commentModel");
const postModel = require("../../models/postModel");


const addComment = async (req,res) =>{
    const { comment, userId, commentedPostId } = req.body;
try {
        const createdComment = await commentModel.create({
            comment,
            userId,
            commentedPostId,
        })
        await postModel.findByIdAndUpdate(commentedPostId, {
          $push: {
            comments: createdComment._id
          },
        });
        res.send("done")
} catch (error) {
    res.send(error)
}
}
module.exports = addComment