var React = require('react')
var ApiUtil = require('../../util/api_util.js');
var UploadButton = require('../posts/upload_button.jsx');
var SearchBar = require('./search.jsx');
var History = require('react-router').History;

var Navbar = React.createClass({
  mixins: [History],

  logoutUser: function(e) {
    e.preventDefault;
    ApiUtil.endSession();
  },

  toFeed: function(e) {
    e.preventDefault;
    this.history.pushState(null, "/", {});
  },

  toProfile: function(e) {
    e.preventDefault;
    this.history.pushState(null, "users/" + window.current_userid);
  },

  render: function() {
    return(
      <div className="bar">
      <ul className="navbar-ul">
        <li className="icon icon-1"><button className="navbar_buttons" onClick={this.toFeed}>My Feed</button></li>
        <li className="icon icon-2"><UploadButton/></li>
        <li className="icon icon-3"><button className="navbar_buttons" onClick={this.toProfile}>My Profile</button></li>
        <li className="con_name">
          Welcome {window.current_username}
        </li>
        <li className="con_site"><h1>DaguerreoTyp</h1></li>
        <li className="logout"><button className="navbar_buttons" onClick={this.logoutUser}>Logout</button></li>
        <li className="search">
          <SearchBar/>
        </li>
      </ul>
      </div>
    );
  }
});

module.exports = Navbar;
