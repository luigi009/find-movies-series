import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Router>
              <>
                <Route exact path="/" component={Landing} />
                <Route exact path="/movie/:id" component={Movie} />
                <Redirect to="/" />
              </>
            </Router>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;