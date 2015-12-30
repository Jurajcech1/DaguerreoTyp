var React = require('react');
var FollowButton = require('../follows/follow_button.jsx');

var UserDetail = React.createClass({
  render: function() {
    if (!this.props.user) {
      return <div></div>
    } else {
      var button = <FollowButton user={this.props.user}/>
      var userDetailClass = "user_detail_username"
      if (this.props.user.id === parseInt(window.current_userid)) {
        button = <div></div>
        userDetailClass = "current_user_detail"
      }
      return(
        <div id="user_detail">
          <h2 className={userDetailClass}>{this.props.user.username}</h2>
          {button}
        </div>
      );
    }
  }
});

module.exports = UserDetail;
