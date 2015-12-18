var ApiActions = require('../actions/api_actions.js')

var ApiUtil = {
  fetchAllPosts: function() {
    $.ajax({
      url: "api/posts",
      success: function (posts) {
        ApiActions.receiveAllPosts(posts);
      }
    });
  },

  fetchSinglePost: function(id) {
    $.ajax({
      url: "api/posts/" + id,
      success: function (post) {
        ApiActions.receiveSinglePost(post);
      }
    });
  },

  createNewPost: function(post, caption) {
    $.ajax({
      url: "api/posts",
      method: 'POST',
      data: {post: {picture_URL: post.secure_url, public_id: post.public_id, caption: caption}},
      success: function (newPost) {
        ApiActions.receiveNewPost(newPost);
      }
    });
  }
};

module.exports = ApiUtil;
