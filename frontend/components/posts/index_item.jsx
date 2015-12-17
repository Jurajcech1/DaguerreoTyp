var React = require('react');
var History = require('react-router').History;

var IndexItem = React.createClass({
  mixins: [History],

  handleClick: function(e) {
    e.preventDefault();
    var post = this.props.post
    this.history.pushState(null, "/posts/" + post.id);
  },

  render: function() {
    console.log(this.props.post.picture_URL);
    var public_id = this.props.post.public_id;
    return(
      <li className="indexPostPicture" onClick={this.handleClick}>
        <img src={"http://res.cloudinary.com/dbmqufwhv/image/upload/w_280,h_280/" + public_id + ".png"} />
      </li>
    );
  }
});

module.exports = IndexItem;
