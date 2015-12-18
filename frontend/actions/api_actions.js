var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');
var UserConstants = require('../constants/user_constants.js');

ApiActions = {
  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveSinglePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: [post]
    });
  },

  receiveNewPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.NEW_POST_RECEIVED,
      post: post
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }
};

module.exports = ApiActions;
