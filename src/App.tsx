import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Visualizer from './Visualizer/Visualizer';
import Toolbar from './Toolbar/Toolbar';
import CSS from 'csstype';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Toolbar />
      <Visualizer />
    </Provider>
  );
}

export default App;
