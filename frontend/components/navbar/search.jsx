var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var UserStore = require('../../stores/user.js');
var History = require('react-router').History;

var SearchBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { inputVal: "", users: UserStore.all() };
  },

  _updateUsers: function() {
    this.setState({ users: UserStore.all() });
  },

  componentDidMount: function() {
    this.userUpdater = UserStore.addListener(this._updateUsers);
    ApiUtil.fetchAllUsers();
  },

  handleInput: function (event) {
    this.setState({ inputVal: event.currentTarget.value });
  },

  matches: function () {
    var matches = [];
    if(this.state.inputVal.length === 0){
      return matches;
    }

    this.state.users.forEach(function (user) {
      var sub = user.username.slice(0, this.state.inputVal.length);
      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
        matches.push(user);
      }
    }.bind(this));

    return matches;
  },

  selectName: function (event) {
    event.preventDefault;
    var id = event.currentTarget.value;
    this.history.pushState(null, "/users/" + id);
    this.setState({inputVal: ""});
  },

  render: function () {
    var theUsers = this.matches();
    if (theUsers === []) {
      return(
        <div>
          <input type="search" placeholder="search users" onChange={this.handleInput} value={this.state.inputVal} />
          <ul>
            <li>no user</li>
          </ul>
        </div>
      )
    } else {
      return(
        <div>
          <input type="search" placeholder="search users" onChange={this.handleInput} value={this.state.inputVal} />
          <ul>
            {
              theUsers.map(function (user) {
                return <li key={user.id} value={user.id} onClick={this.selectName}>{user.username}</li>
              }.bind(this))
            }
          </ul>
        </div>
      );
    }
  }
});

module.exports = SearchBar;
