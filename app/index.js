var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var store = require('./store/store');
var Provider = require('react-redux').Provider;

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>, 
  document.getElementById('app')
);