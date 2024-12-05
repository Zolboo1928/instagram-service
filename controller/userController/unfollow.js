const userModel = require("../../models/userModel");

const unfollowUser = async (req,res)=>{
    const {unfollowerId , unfollowedUserId}=req.body
try {
        await userModel.findByIdAndUpdate(unfollowerId, {
          $pull: {
            following: unfollowedUserId,
          },
        });
        await userModel.findByIdAndUpdate(unfollowedUserId,{
            $pull:{
                followers: unfollowerId
            }
        })
        res.send("done")
} catch (error) {
    res.send(error)
}
}
module.exports = unfollowUser