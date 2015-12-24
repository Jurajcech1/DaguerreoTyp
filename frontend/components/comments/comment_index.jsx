var React = require('react');
var CommentItem = require('./comment_item.jsx')

var CommentIndex = React.createClass({
  getCommentItems: function() {
    var comments = this.props.post.comments;
    var items = <div></div>
    if (comments) {
      items = comments.map(function(comment) {
        return <CommentItem key={comment.id} comment={comment}/>;
      });
    }
    return items
  },

  render: function() {
    if (this.props.post) {
      var commentItems = this.getCommentItems();
      return(
        <ul className="comment_index">
          {commentItems}
        </ul>
      );
    } else {
      return <div></div>
    }
  }
});

module.exports = CommentIndex;
