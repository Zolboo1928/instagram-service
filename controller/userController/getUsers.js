const userModel = require("../../models/userModel");


const getUsers = async (req,res)=>{
   try {
   let allUsers = await userModel.find().populate({
    path: 'posts',
    populate: {
        path: 'comments'
    }
   });
   res.send(allUsers)
   } catch (error) {
    res.send(error)
   }
}
module.exports = getUsers