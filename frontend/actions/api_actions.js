var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');

ApiActions = {
  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveNewPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.NEW_POST_RECEIVED,
      post: post
    });
  }
};

module.exports = ApiActions;
