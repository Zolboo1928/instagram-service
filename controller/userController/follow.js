const userModel = require("../../models/userModel");

const createNewFollower = async (req,res)=>{
    const {followerId , followedUserId} = req.body
    if (followerId === followedUserId) res.send("can't follow urself")
      try {
        await userModel.findByIdAndUpdate(followerId, {
          $addToSet: {
            following: followedUserId,
          },
        });
        await userModel.findByIdAndUpdate(followedUserId, {
          $addToSet: {
            followers: followerId,
          },
        });
        res.send("done");
      } catch (error) {
        res.send(error);
      }
}
module.exports = createNewFollower