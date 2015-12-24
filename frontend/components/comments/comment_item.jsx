var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../../util/api_util.js');

var CommentItem = React.createClass({
  mixins: [History],

  toUser: function(e) {
    e.preventDefault();

    var authorId = this.props.comment.author.id;
    this.history.pushState(null, "/users/" + authorId);
  },

  deleteComment: function(e) {
    e.preventDefault();

    var commentId = this.props.comment.id;
    var postId = this.props.comment.post_id;
    ApiUtil.deleteComment(postId, commentId);
  },

  render: function() {
    var authorName = this.props.comment.author.username;
    var content = this.props.comment.content;
    return(
      <li className="single_comment clearfix">
        <div className="comment_author" onClick={this.toUser}>{authorName}</div>
        <i id="delete_icon" className="fa fa-times" onClick={this.deleteComment}></i>
        <div className="comment_content">{content}</div>
      </li>
    );
  }
});

module.exports = CommentItem;
