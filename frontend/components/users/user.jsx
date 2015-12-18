var React = require('react');
var Index = require('../posts/index.jsx');
var UserStore = require('../../stores/user.js');
var ApiUtil = require('../../util/api_util.js');
var UserDetail = require('./user_detail.jsx');

var User = React.createClass({
  getInitialState: function() {
    return { user: UserStore.giveUser() };
  },

  _updateUser: function() {
    this.setState({ user: UserStore.giveUser() });
  },

  componentDidMount: function() {
    this.userUpdater = UserStore.addListener(this._updateUser);
    ApiUtil.fetchUser(parseInt(this.props.params.userId));
  },

  componentWillReceiveProps: function(props) {
    ApiUtil.fetchUser(parseInt(props.params.userId));
  },

  componentWillUnmount: function() {
    this.userUpdater.remove();
  },

  render: function() {
    var id = parseInt(this.props.params.userId);
    var theUser = this.state.user
    return(
      <div>
        <UserDetail user={theUser}/>
        <Index userId={id}/>
      </div>
    );
  }
});

module.exports = User;
