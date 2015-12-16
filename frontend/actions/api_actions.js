var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');

ApiActions = {
  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  }
};

module.exports = ApiActions;
