var React = require('react');

var UserDetail = React.createClass({
  render: function() {
    if (!this.props.user) {
      return <div></div>
    }
    return(
      <h2>{this.props.user.username}</h2>
    );
  }
});

module.exports = UserDetail;
