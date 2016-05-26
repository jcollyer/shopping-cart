import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/app'
import Products from './components/products'
import Cart from './components/cart'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Products} />
      <Route path="/cart" component={Cart} />
    </Route>
  </Router>
);
