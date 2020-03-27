import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <main>
      <h1 className="LandingPage_hero_text LandingPage_text_color">Hero Text, Being Heroic</h1>
      <p className="LandingPage_text_color">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </main>
  );
};

export default LandingPage;
