const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const connectMongoose = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    if (res) console.log("connected to mongoose");
  } catch (error) {
    console.log("failed to connect to mongoose")
  }
};

module.exports = connectMongoose