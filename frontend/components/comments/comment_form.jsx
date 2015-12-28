var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var CommentForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {content: ""};
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var postId = this.props.post.id;
    ApiUtil.createNewComment(postId, this.state.content);
    this.setState({content: ""});
  },

  render: function() {
    return(
      <div className="comment_input_container">
        <form onSubmit={this.handleSubmit}>
          <input className="comment_input_box" type="textarea" placeholder="add comment" valueLink={this.linkState('content')}/>
        </form>
      </div>
    );
  }
});

module.exports = CommentForm;
