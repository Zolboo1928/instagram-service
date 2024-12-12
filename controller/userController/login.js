const userModel = require("../../models/userModel");

const login = (req,res)=>{
    const { password, email } = req.body;
    userModel.find()
}
module.exports = login