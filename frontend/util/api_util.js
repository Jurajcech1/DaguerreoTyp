var ApiActions = require('../actions/api_actions')

var ApiUtil = {
  fetchAllPosts: function() {
    $.ajax({
      url: "api/posts",
      success: function (posts) {
        ApiActions.receiveAllPosts(posts);
      }
    });
  }
};

module.exports = ApiUtil;
