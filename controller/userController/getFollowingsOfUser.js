const userModel = require("../../models/userModel");

const getFollowingsOfUser = async(req,res) =>{
   try {
       const { userId } = req.body;
       const user = await userModel.findById(userId).populate("following");
       res.send(user.following);
   } catch (error) {
    res.log(error)
   }
}
module.exports = getFollowingsOfUser;