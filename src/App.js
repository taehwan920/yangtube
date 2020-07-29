import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/home/:query' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
