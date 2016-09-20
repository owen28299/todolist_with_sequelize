'use strict';

import { combineReducers } from 'redux';
const counter = require('./counter');
const list = require('./list');

const Reducers = combineReducers({
  counter,
  list
});

module.exports = Reducers;