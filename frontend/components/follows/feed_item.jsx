var React = require('react');
var History = require('react-router').History;

var FeedItem = React.createClass({
  mixins: [History],

  nameClick: function(e) {
    e.preventDefault;
    var followee = this.props.followee;
    this.history.pushState(null, "/users/" + followee.id);
  },

  picClick: function(e) {
    e.preventDefault;
    var post = this.props.followee.most_recent_photo;
    this.history.pushState(null, "/posts/" + post.id);
  },

  render: function() {
    var public_id = this.props.followee.most_recent_photo.public_id;
    var caption = this.props.followee.most_recent_photo.caption;
    return(
      <li className="feed_item">
        <h3 onClick={this.nameClick}>{this.props.followee.username}</h3>
        <img onClick={this.picClick} src={"https://res.cloudinary.com/dbmqufwhv/image/upload/w_500,h_500/" + public_id + ".png"} />
        <div>{caption}</div>
      </li>
    );
  }
});

module.exports = FeedItem;
