var React = require('react');
var FollowStore = require('../../stores/follow.js');
var ApiUtil = require('../../util/api_util.js');
var FeedItem = require('./feed_item.jsx');

var Feed = React.createClass({
  getStateFromStore: function() {
    return {followees: FollowStore.all()};
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

  render: function() {
    var feeds = this.state.followees.map(function(followee) {
      return <FeedItem key={followee.id} followee={followee} />;
     });

    return(
      <ul>
        {feeds}
      </ul>
    )
  }
});

module.exports = Feed;
