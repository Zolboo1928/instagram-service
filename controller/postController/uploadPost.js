
const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");


const uploadPost = async (req,res)=>{
    const { title, userId, postImages } = req.body;
    try {
        const postmodelRes  = await postModel.create({
        title,
        userId,
        postImages,
        })
        await userModel.findByIdAndUpdate(userId,{
            $push:{
                posts: postmodelRes._id
            }
        })
        res.send(postmodelRes)
    } catch (error) {
        res.send(error)
    }
}
 module.exports = uploadPost