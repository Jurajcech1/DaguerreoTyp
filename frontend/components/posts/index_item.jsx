var React = require('react');

var IndexItem = React.createClass({
  render: function() {
    return(
      <li><img src={this.props.post.picture_URL} /></li>
    );
  }
});

module.exports = IndexItem;
