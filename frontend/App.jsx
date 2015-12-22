var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/posts/index.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var PostForm = require('./components/posts/post_form.jsx');
var PostShow = require('./components/posts/post_show.jsx');
var User = require('./components/users/user.jsx');
var Feed = require('./components/follows/feed.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <div className="bar">
        <ul className="navbar-ul">
          <li className="icon icon-1">Feed</li>
          <li className="icon icon-2">make DaguerreoTyp</li>
          <li className="icon icon-3">yaaay brooke</li>
          <li className="icon">
            Emily Blunt
          </li>
          <li className="search">
            <input type="search" placeholder="search users" />
          </li>
          <li className="logout"><button>Logout</button></li>
        </ul>
        </div>
        <header><h1>DaguerreoTyp</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed}/>
    <Route path="users/:userId" component={User}/>
    <Route path="posts/new" component={PostForm}/>
    <Route path="posts/:postId" component={PostShow}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});

// <form className="navbar-form navbar-left" role="search">
//   <div className="form-group">
//     <input type="text" className="form-control" placeholder="Search"/>
//   </div>
//   <button type="submit" className="btn btn-default">Submit</button>
// </form>
