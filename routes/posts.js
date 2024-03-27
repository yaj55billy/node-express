const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/posts');

router.get('/', PostsControllers.getPosts);
router.post('/', PostsControllers.createdPost);
router.patch('/:id', PostsControllers.editPost);
router.delete('/:id', PostsControllers.deletePost);
router.delete('/', PostsControllers.deleteAllPosts);

module.exports = router;
