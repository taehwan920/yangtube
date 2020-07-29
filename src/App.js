import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/Home';
import NotFound from './components/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/home/:query' component={Home} />
      <Route exact path='/home' component={Home} />
      <Redirect exact path="/" to="/home" />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
