const express = require("express")
const mongoose = require("mongoose")
const connectMongoose = require("./controller/connectMongoose")
const userRoute = require("./routes/userRoute")
const postRoute = require("./routes/postRoute")
const dotenv = require("dotenv");
const cors = require("cors")
const authMiddleware = require("./controller/authMiddleWare")
dotenv.config();

const Port = 8000
const app = express()
app.use(express.json())
app.use(cors())

connectMongoose()
app.use("/user",  userRoute)
app.use("/post", authMiddleware ,postRoute);

app.listen(Port,()=> console.log(`running on ${Port}`))