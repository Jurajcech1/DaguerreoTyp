var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var PostStore = new Store(AppDispatcher);
var PostConstants =require('../constants/post_constants.js');

var _posts = []

var resetPosts = function(posts) {
  _posts = posts.slice();
};

var addPost = function(post) {
  _posts.push(post);
};

PostStore.all = function() {
  return _posts.slice();
};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
    case PostConstants.NEW_POST_RECEIVED:
      addPost(payload.post);
      PostStore.__emitChange();
      break;
  }
};

module.exports = PostStore;
