var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../../util/api_util.js');

var DeleteButton = React.createClass({
  mixins: [History],

  deletePost: function(e) {
    e.preventDefault();
    var currentPost = this.props.post;
    ApiUtil.destroyPost(currentPost.id);
    this.history.pushState(null, "users/" + currentPost.author_id);
  },

  render: function() {
    var post = this.props.post;
    if (post.author_id !== parseInt(window.current_userid)) {
      return( <div></div> );
    } else {
      return(
        <div>
          <button onClick={this.deletePost}>Delete Picture</button>
        </div>
      );
    }
  }
});

module.exports = DeleteButton;
