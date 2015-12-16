var React = require('react');
var IndexItem = require('./index_item.jsx');
var PostStore = require('../../stores/post.js');
var ApiUtil = require('../../util/api_util.js');

var Index = React.createClass({
  getInitialState: function() {
    return { posts: PostStore.all() };
  },

  _updatePosts: function() {
    this.setState({ posts: PostStore.all() });
  },

  componentDidMount: function() {
    this.postUpdater = PostStore.addListener(this._updatePosts);
    ApiUtil.fetchAllPosts();
  },

  render: function() {
    var posts = this.state.posts.map(function(post) {
      return <IndexItem key={post.id} post={post} />;
    });

    return(
      <ul>
        {posts}
      </ul>
    );
  }
});

module.exports = Index;
