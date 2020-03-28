import React, { useState } from 'react';
import Visualizer from './Visualizer/Visualizer';
import Toolbar from './Toolbar/Toolbar';
import CSS from 'csstype';
import './App.css';

function App() {
  return (
    <>
      <Toolbar />
      <Visualizer />
    </>
  );
}

export default App;
