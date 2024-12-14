const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = async (req,res)=>{
       const { password, email } = req.body;                                     
try {
           const user = await userModel.findOne({
            email
           })
           bcrypt.compare(password, user.password, async(err , isMatch)=>{
               if(err){
                res.send(err)
            } else if (isMatch){
                const infoInsideLoginToken = {
                  _id: user._id,
                  email: user.email,
                };
                const loginToken = jwt.sign(infoInsideLoginToken, process.env.JWT_SECRET, {expiresIn:"24h"});
                res.send({loginToken})
            } else {
                res.send("didn't match")
            }
           })
            
} catch (error) {
    res.send(error)
}
}
module.exports = login