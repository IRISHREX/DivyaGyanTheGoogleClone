import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { Results } from './Results';
import { Search } from './Search';

export const Routers = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/" element={<Search/>}>
        
      </Route>
      <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

    </Switch>
  </div>

);
