const route = require('express')
const signUp = require('../controller/signup')
const createNewFollower = require('../controller/follow')
const unfollowUser = require('../controller/unfollow')
const getUsers = require('../controller/getUsers')
const userRoute = route()

userRoute.post('/signup', signUp)
userRoute.post('/follow',createNewFollower )
userRoute.post("/unfollow",unfollowUser )
userRoute.get("/getUsers",getUsers)

module.exports = userRoute

