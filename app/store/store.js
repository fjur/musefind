var Redux = require('redux');
var createStore = Redux.createStore;
// import { createStore } from 'redux';
var reducer = require('../reducers/index');
// import reducer from '../reducers/index';


const store = createStore(reducer);

module.exports = store;