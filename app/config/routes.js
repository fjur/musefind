var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var hashHistory = ReactRouter.hashHistory;
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="results/:owner/:repo/:sha" component={ResultsContainer} />
    </Route>
  </Router>
);

module.exports = routes;