const userModel = require("../../models/userModel");

const signUp = async (req, res) => {
  const { userName, password, email, profileImage } = req.body;
  try {
    const createdUser = await userModel.create({
      userName,
      password,
      email,
      profileImage,
    });
    res.send(createdUser);
  } catch (error) {
    res.send(error);
  }
};
module.exports = signUp