const postModel = require("../models/postModel");
const userModel = require("../models/userModel");

const uploadPost = async (req,res)=>{
    const { title, postedUserImage, userId } = req.body;
    try {
        const postmodelRes  = await postModel.create({
        title,
        postedUserImage,
        userId,
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