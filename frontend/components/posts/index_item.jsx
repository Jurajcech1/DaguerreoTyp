var React = require('react');

var IndexItem = React.createClass({
  render: function() {
    console.log(this.props.post.picture_URL);
    var public_id = this.props.post.public_id;
    return(
      <li><img src={"http://res.cloudinary.com/dbmqufwhv/image/upload/w_280,h_280/" + public_id + ".png"} /></li>
    );
  }
});

module.exports = IndexItem;
