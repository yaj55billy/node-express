const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const Post = require("../models/posts");

const posts = {
  async getPosts(req, res) {
    const allPosts = await Post.find();
    handleSuccess(res, allPosts);
  },
  async createdPost(req, res) {
    try {
      const data = req.body;

      if(data.content === undefined) {
        handleError(res);
        return;
      }

      const newPost = await Post.create({
        name: data.name,
        image: data.image,
        content: data.content,
        type: data.type,
        tags: data.tags
      });
      handleSuccess(res, newPost);

    } catch (error) {
      handleError(res, error);
    }
  },
  async editPost(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;

      if(data.content === undefined) {
        handleError(res);
        return;
      }

      const editContent = {
        name: data.name,
        image: data.image,
        content: data.content,
        type: data.type,
        tags: data.tags
      };
      const editPost = await Post.findByIdAndUpdate(id, editContent, { returnDocument: 'after' });
      editPost ? handleSuccess(res, editPost) : handleError(res);
      
    } catch (error) {
      handleError(res, error);
    }  
  },
  async deletePost(req, res) {
    const id = req.params.id;
    const deletePost = await Post.findByIdAndDelete(id);
    deletePost ? handleSuccess(res, null) : handleError(res);
  },
  async deleteAllPosts(req, res) {
    const posts = await Post.deleteMany({}); 
    handleSuccess(res, posts);
  }
}

module.exports = posts;