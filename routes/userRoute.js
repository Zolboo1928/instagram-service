const route = require('express')
const signUp = require('../controller/userController/signup')
const createNewFollower = require('../controller/userController/follow')
const unfollowUser = require('../controller/userController/unfollow')
const getUsers = require('../controller/userController/getUsers')
const userRoute = route()

userRoute.post('/signup', signUp)
userRoute.post('/follow',createNewFollower )
userRoute.post("/unfollow",unfollowUser )
userRoute.get("/getUsers",getUsers)

module.exports = userRoute

