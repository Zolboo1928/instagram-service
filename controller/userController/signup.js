const userModel = require("../../models/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
  const { userName, password, email, profileImage } = req.body;
  const saltRounds = 10;
  try {
    const hashedPass = await bcrypt.hash(password, saltRounds)
    const createdUser = await userModel.create({
      userName,
      password:hashedPass,
      email,
      profileImage,
    });
    const jwtSecretKeySignUp =  process.env.JWT_SECRET;
    const jwtUser = {
      userName:createdUser.userName,
      password:createdUser.password,
      email:createdUser.email,
      profileImage:createdUser.profileImage
    }
    const tokenSignUp = jwt.sign(jwtUser,jwtSecretKeySignUp)
    res.send(tokenSignUp);
  } catch (error) {
    console.error(error)
    res.send(error);
  }
};
module.exports = signUp