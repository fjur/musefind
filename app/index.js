var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
// import store from './store';
var store = require('./store/store');

console.log('it works so far');

ReactDOM.render(routes, document.getElementById('app'));