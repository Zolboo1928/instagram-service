const route = require('express');
const uploadPost = require('../controller/postController/uploadPost');
const getPost = require('../controller/postController/getPost.js');
const addComment = require('../controller/postController/comment.js');
const getComments = require('../controller/postController/getComments.js');
const getPostById = require('../controller/postController/getPostById.js');
const like = require('../controller/postController/like.js');
const dislike = require('../controller/postController/dislike.js');
const getPosts = require('../controller/postController/getPosts.js');
const getPostWithLikedUsers = require('../controller/postController/getPostWithLikedUsers.js');
const postRoute = route()
 
postRoute.post("/uploadPost", uploadPost);
postRoute.post("/comment", addComment)
postRoute.post("/like", like )
postRoute.put("/dislike",dislike )

postRoute.get("/posts", getPosts);

postRoute.get("/getPosts",getPost)
postRoute.get("/getComments", getComments)
postRoute.post("/getPostWithLikedUsers", getPostWithLikedUsers )
postRoute.get('/getPostById/:postId',getPostById)

module.exports = postRoute


