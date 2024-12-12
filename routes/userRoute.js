const route = require('express')
const signUp = require('../controller/userController/signup')
const createNewFollower = require('../controller/userController/follow')
const unfollowUser = require('../controller/userController/unfollow')
const getUsers = require('../controller/userController/getUsers')
const authMiddleware = require('../controller/authMiddleWare')
const userRoute = route()

userRoute.post('/signup', signUp)
userRoute.get("/login", )
userRoute.post("/follow" ,authMiddleware, createNewFollower);
userRoute.post("/unfollow", authMiddleware, unfollowUser);
userRoute.get("/getUsers", authMiddleware,getUsers);

module.exports = userRoute

