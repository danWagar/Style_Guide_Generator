import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';
import Visualizer from './Visualizer/Visualizer';
import Toolbar from './Toolbar/Toolbar';
import StyleGuide from './StyleGuide/StyleGuide';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/style-guide" component={StyleGuide} />
          <Route exact path="/">
            <Toolbar />
            <Visualizer />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
