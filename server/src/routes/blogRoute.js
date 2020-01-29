const blogRoute = require('express').Router();
const blogController = require('../controllers/blogController');

const {
    addPost,
    editPost,
    getAllPost,
    deletePost,
    likePost,
    getPostByName
} = blogController;


blogRoute.post('/blog/add', addPost);
blogRoute.put('/like/blog/:postId', likePost);
blogRoute.get('/blogs/all', getAllPost);
blogRoute.put('/blog/:postId', editPost);
blogRoute.delete('/blog/:postId', deletePost);
blogRoute.get('/blog/:name', getPostByName);

module.exports = blogRoute;
