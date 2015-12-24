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
    if(this.props.followee.most_recent_photo) {
      var public_id = this.props.followee.most_recent_photo.public_id;
      var caption = this.props.followee.most_recent_photo.caption;
      return(
        <li className="feed_item">
          <h3 className="feed_item_username" onClick={this.nameClick}>{this.props.followee.username}</h3>
          <div className="feed_item_caption">{caption}</div>
          <img onClick={this.picClick} src={"https://res.cloudinary.com/dbmqufwhv/image/upload/c_lfill,g_center,h_500,q_81,r_0,w_500/" + public_id + ".png"} />
        </li>
      );
    } else {
      return(<li></li>);
    }
  }
});

module.exports = FeedItem;
