const route = require('express')
const signUp = require('../controller/userController/signup')
const createNewFollower = require('../controller/userController/follow')
const unfollowUser = require('../controller/userController/unfollow')
const getUsers = require('../controller/userController/getUsers')
const authMiddleware = require('../controller/authMiddleWare')
const login = require('../controller/userController/login')
const getUserById = require('../controller/userController/getUserById')
const getPostsOfUserByUserId = require('../controller/userController/getPostsOfUserByUserId')
const getFollowersOfUser = require('../controller/userController/getFollowersOfUser')
const getFollowingsOfUser = require('../controller/userController/getFollowingsOfUser')
const userRoute = route()

userRoute.post('/signup', signUp)
userRoute.post("/login", login)
userRoute.post("/follow" ,authMiddleware, createNewFollower);
userRoute.post("/unfollow", authMiddleware, unfollowUser);
userRoute.get("/getUsers", authMiddleware,getUsers);
userRoute.post("/getUserById", authMiddleware,getUserById)
userRoute.post("/getPostsOfUserByUserId", authMiddleware , getPostsOfUserByUserId);
userRoute.post("/getFollowersOfUser", authMiddleware , getFollowersOfUser)
userRoute.post("/getFollowingsOfUser", authMiddleware, getFollowingsOfUser);

module.exports = userRoute

