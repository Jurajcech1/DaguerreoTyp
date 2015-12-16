var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/posts/index.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

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
    <IndexRoute component={Index}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('content'));
});
