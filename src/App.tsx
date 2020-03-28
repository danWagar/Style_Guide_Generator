import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler } from 'react-color';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete: ColorChangeHandler = col => {
    setColor(col.hex);
  };

  return (
    <>
      <Header />
      <LandingPage />
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
    </>
  );
}

export default App;
