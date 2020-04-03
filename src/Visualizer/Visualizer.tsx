import React from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import './Visualizer.css';

const Visualizer: React.FC = () => {
  return (
    <div className="Visualizer_container">
      <Header />
      <LandingPage />
    </div>
  );
};

export default Visualizer;
