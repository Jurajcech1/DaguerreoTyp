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
  },

  fetchAllUsers: function() {
    $.ajax({
      url: "api/users",
      success: function (users) {
        ApiActions.receiveAllUsers(users);
      }
    });
  },

  fetchFollowees: function() {
    $.ajax({
      url: "api/follows",
      success: function (followees) {
        ApiActions.receiveFollowees(followees);
      }
    });
  },

  createNewFollow: function(id) {
    $.ajax({
      url: "api/follows",
      method: 'POST',
      data: {follow: {followed_id: id}},
      success: function (followee) {
        ApiActions.receiveNewFollowee(followee);
      }
    });
  },

  destroyFollow: function(id) {
    $.ajax({
      url: "api/follows/" + id,
      method: 'DELETE',
      success: function (followee) {
        ApiActions.receiveDeletedFollow(followee);
      }
    });
  },

  createNewComment: function(postId, content) {
    $.ajax({
      url: "api/posts/" + postId,
      method: 'PATCH',
      data: {comment: {content: content, post_id: postId}},
      success: function (post) {
        ApiActions.receiveSinglePost(post);
      }
    });
  },

  deleteComment: function(postId, commentId) {
    $.ajax({
      url: "api/posts/" + postId + "/edit",
      data: {comment: {post_id: postId, id: commentId}},
      success: function (post) {
        ApiActions.receiveSinglePost(post);
      }
    });
  },

  endSession: function() {
    $.ajax({
      url: "/session",
      method: 'DELETE',
      success: function (result) {
        window.location.href = "/session/new";
      }
    });
  }
};

module.exports = ApiUtil;
