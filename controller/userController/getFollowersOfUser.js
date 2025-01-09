const userModel = require("../../models/userModel")

const getFollowersOfUser = async(req,res)=>{
try {
        const {userId} = req.body
        const user = await userModel.findById(userId).populate("followers");
        res.send(user)
} catch (error) {
    res.send(error)
}
}
module.exports = getFollowersOfUser