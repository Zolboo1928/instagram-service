const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt")

const login = async (req,res)=>{
       const { password, email } = req.body;                                     
try {
           const user = await userModel.findOne({
            email
           })
           bcrypt.compare(password, user.password, (err , isMatch)=>{
               if(err){
                res.send(err)
            } else if (isMatch){
                res.send(user)
            } else {
                res.send("didn't match")
            }
           })
} catch (error) {
    res.send(error)
}
}
module.exports = login