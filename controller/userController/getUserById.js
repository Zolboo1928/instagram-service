const userModel = require("../../models/userModel")

const getUserById = async (req,res)=>{
   try {
     const {userId} = req.body
     const foundUser = await userModel.findById(userId)
     res.send(foundUser)
   } catch (error) {
    res.send(error)
   }
}
module.exports = getUserById