// import { createStore } from 'redux';
var Redux = require('redux');
var createStore = Redux.createStore;
// import reducer from '../reducers/index';
var reducer = require('../reducers/index');

const store = createStore(reducer);

module.exports = store;