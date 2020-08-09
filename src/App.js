import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dive from './components/pages/Dive';
import Dog from './components/pages/Dog';
import Dolphin from './components/pages/Dolphin';
import Dance from './components/pages/Dance';
import Sheep from './components/pages/Sheep';
import Firecracker from './components/pages/Firecracker';
import MonkeyShow from './components/pages/MonkeyShow';
import PlayWithDog from './components/pages/PlayWithDog';
import NotFound from './components/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/dive/:query' component={Dive} />
      <Route exact path='/dive' component={Dive} />
      <Route exact path='/dog/:query' component={Dog} />
      <Route exact path='/dog' component={Dog} />
      <Route exact path='/dolphin/:query' component={Dolphin} />
      <Route exact path='/dolphin' component={Dolphin} />
      <Route exact path='/firecracker/:query' component={Firecracker} />
      <Route exact path='/firecracker' component={Firecracker} />
      <Route exact path='/dance/:query' component={Dance} />
      <Route exact path='/dance' component={Dance} />
      <Route exact path='/sheep/:query' component={Sheep} />
      <Route exact path='/sheep' component={Sheep} />
      <Route exact path='/playwithdog/:query' component={PlayWithDog} />
      <Route exact path='/playwithdog' component={PlayWithDog} />
      <Route exact path='/monkeyshow/:query' component={MonkeyShow} />
      <Route exact path='/monkeyshow' component={MonkeyShow} />

      <Redirect exact path="/" to="/dive" />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
