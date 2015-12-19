var ApiActions = require('../actions/api_actions.js')

var ApiUtil = {
  fetchAllPosts: function(id) {
    $.ajax({
      url: "api/posts",
      data: {author_id: id},
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
  },

  destroyPost: function(id) {
    $.ajax({
      url: "api/posts/" + id,
      method: 'DELETE',
      success: function (response) {
        ApiActions.receiveDeletedPost(response.id);
      }
    });
  },

  fetchUser: function(id) {
    $.ajax({
      url: "api/users/" + id,
      success: function (user) {
        ApiActions.receiveUser(user);
      }
    });
  }
};

module.exports = ApiUtil;
