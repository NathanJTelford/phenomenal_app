import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    );
  }
}

export default App;
