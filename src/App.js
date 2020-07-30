import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/Home';
import Dog from './components/pages/Dog';
import NotFound from './components/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/home/:query' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/dog/:query' component={Dog} />
      <Route exact path='/dog' component={Dog} />
      <Redirect exact path="/" to="/home" />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
