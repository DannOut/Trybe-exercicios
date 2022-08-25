import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import CostumerList from './pages/CostumerList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/register" component={ Register } />
          <Route path="/costumersList" component={ CostumerList } />
        </Switch>
      </div>
    );
  }
}
