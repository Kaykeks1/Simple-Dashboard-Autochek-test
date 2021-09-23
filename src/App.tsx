import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import Details from './screens/Details';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </main>
  );
}

export default App;
