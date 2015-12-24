var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var FollowStore = require('../../stores/follow.js')

var FollowButton = React.createClass({
  getStateFromStore: function() {
    var that = this;
    var followState = "follow"
    FollowStore.all().forEach(function (followee) {
      if(that.props.user.id === followee.id) {
        followState = "unfollow";
      }
    });
    return {follow: followState};
  },

  getInitialState: function() {
    return this.getStateFromStore();
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function() {
    this.followeeListener = FollowStore.addListener(this._onChange);
    ApiUtil.fetchFollowees();
  },

  componentWillUnmount: function() {
    this.followeeListener.remove();
  },

  handleClick: function(e) {
    e.preventDefault();
    if(this.state.follow === "follow") {
      ApiUtil.createNewFollow(this.props.user.id);
    } else {
      ApiUtil.destroyFollow(this.props.user.id);
    }
  },

  render: function() {
    return(
      <div className="follow_button" onClick={this.handleClick}>
        {this.state.follow}
      </div>
    );
  }
});

module.exports = FollowButton;
