var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostConstants = require('../constants/post_constants.js');
var UserConstants = require('../constants/user_constants.js');
var FollowConstants = require('../constants/follow_constants.js');

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

  receiveDeletedPost: function (id) {
    AppDispatcher.dispatch({
      actionType: PostConstants.DELETE_POST,
      id: id
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveFollowees: function (followees) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWEES_RECEIVED,
      followees: followees
    });
  },

  receiveNewFollowee: function (followee) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWEE_RECEIVED,
      followee: followee
    });
  },

  receiveDeletedFollow: function (followee) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.DELETE_FOLLOWEE,
      followee: followee
    });
  }
};

module.exports = ApiActions;
