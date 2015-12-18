var React = require('react');
var PostStore = require('../../stores/post.js');
var ApiUtil = require('../../util/api_util.js');

var Post = React.createClass({
  getStateFromStore: function() {
    return {post: PostStore.find(parseInt(this.props.params.postId))};
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.showPostListener = PostStore.addListener(this._onChange);
    ApiUtil.fetchSinglePost(parseInt(this.props.params.postId));
  },

  componentWillUnmount: function() {
    this.showPostListener.remove();
  },

  render: function() {
    var post = this.state.post
    return(
      <div>
        <h3>{post.caption}</h3>
        <img src={post.picture_URL} />
      </div>
    );
  }
});

module.exports = Post;
