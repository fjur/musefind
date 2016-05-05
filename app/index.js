var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
// import store from './store';
var store = require('./store/store');
var actions = require('./actions/git-info-actions')

console.log('it works so far');
console.log(store.getState());
store.dispatch(actions.updateOwner('hello'));
console.log(store.getState());

ReactDOM.render(routes, document.getElementById('app'));