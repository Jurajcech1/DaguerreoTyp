var React = require('react');
var FollowButton = require('../follows/follow_button.jsx');

var UserDetail = React.createClass({
  render: function() {
    if (!this.props.user) {
      return <div></div>
    }
    return(
      <div>
        <h2>{this.props.user.username}</h2>
        <FollowButton user={this.props.user}/>
      </div>
    );
  }
});

module.exports = UserDetail;
