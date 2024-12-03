const route = require('express')
const uploadPost = require('../controller/uploadPost')
const getPost = require('../controller/getPost')
const addComment = require('../controller/comment')
const getComments = require('../controller/getComments.js')
const getPostById = require('../controller/getPostById.js')
const like = require('../controller/like.js')
const getPostsWithLikedUsers = require('../controller/getPostsWithLikedUsers.js')
const dislike = require('../controller/dislike.js')
const postRoute = route()
 
postRoute.post('/uploadPost',uploadPost )
postRoute.get("/getPosts",getPost )
postRoute.post("/comment", addComment)
postRoute.get("/getComments", getComments)
postRoute.get('/getPostById',getPostById)
postRoute.post("/like", like )
postRoute.get("/getPostsWithLikedUsers", getPostsWithLikedUsers )
postRoute.put("/dislike",dislike )

module.exports = postRoute


