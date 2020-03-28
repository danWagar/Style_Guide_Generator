import React from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './Vizualizer.css';

const Visualizer: React.FC = () => {
  return (
    <div className="Vizualizer_container">
      <Header />
      <LandingPage />
    </div>
  );
};

export default Visualizer;
