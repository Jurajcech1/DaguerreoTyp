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
