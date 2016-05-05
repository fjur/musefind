var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var store = require('./store/store');
var actions = require('./actions/git-info-actions');
var Provider = require('react-redux').Provider;
// import { Provider } from 'react-redux';

// console.log(store.getState());
// store.dispatch(actions.updateOwner('hello'));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>, 
  document.getElementById('app')
);