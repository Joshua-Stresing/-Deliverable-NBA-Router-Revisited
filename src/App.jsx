import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharCard from './components/charCard/charCard';
import List from './views/list/list';
import Welcome from './views/welcome/Welcome';

export default function App() {
  return (
    <Switch>
      <Route exact path="/list/:id">
        <CharCard />
      </Route>
      <Route exact path="/list">
        <List />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}
