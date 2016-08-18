'use strict';

import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

const Header = require('./components/header'),
      GetAll = require('./components/getall'),
      Add    = require('./components/add')
      ;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={GetAll}></IndexRoute>
      <Route path="add" component={Add}></Route>
    </Route>
  </Router>,
  document.getElementById('content')
)