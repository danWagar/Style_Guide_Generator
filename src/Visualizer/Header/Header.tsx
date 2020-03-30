import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import { Link } from 'react-router-dom';
import CSS from 'csstype';
import './Header.css';

const Header: React.FC<Props> = props => {
  const { headerBGColor, emphasisColor, emphasisComplimentColor } = props;
  const headerStyles: CSS.Properties = {
    backgroundColor: headerBGColor
  };
  const emphasisButtonStyle: CSS.Properties = {
    color: emphasisComplimentColor,
    backgroundColor: emphasisColor
  };
  return (
    <header className="Header" style={headerStyles}>
      <h1 className="Header_logo_text">App Name</h1>
      <nav className="Header_nav">
        <p className="Header_login">Login</p>
        <button className="btn" style={emphasisButtonStyle}>
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default connector(Header);
