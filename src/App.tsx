import React from 'react';
import { SketchPicker } from 'react-color';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <SketchPicker />
    </>
  );
}

export default App;
