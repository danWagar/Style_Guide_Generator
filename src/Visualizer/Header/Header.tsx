import React from 'react';
import { Link } from 'react-router-dom';
import CSS from 'csstype';
import './Header.css';

interface Props {
  headerBGColor: string;
}

const Header: React.FC<Props> = props => {
  const { headerBGColor } = props;
  const headerStyles: CSS.Properties = {
    backgroundColor: headerBGColor
  };
  return (
    <header className="Header" style={headerStyles}>
      <h1 className="Header_logo_text">App Name</h1>
      <nav className="Header_nav">
        <p className="Header_login">Login</p>
        <button className="btn emphasis_bg_color emphasis_compliment_color">Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
