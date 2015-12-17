var React = require('react');

var Post = React.createClass({
  

  render: function() {
    var post = this._post();

    return(
      <div>
        <h3>{post.caption}</h3>
        <img src={post.picture_URL} />
      </div>
    );
  }
});

module.exports = Post;
