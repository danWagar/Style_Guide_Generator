import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header Header_bg_color">
      <h1 className="Header_logo_text">App Name</h1>
      <nav className="Header_nav">
        <p className="Header_login">Login</p>
        <button className="btn emphasis_bg_color emphasis_compliment_color">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
