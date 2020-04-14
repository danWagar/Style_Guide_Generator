import React, { useState } from 'react';
import { Props, connector } from '../../reduxInterface';
import Input from '../Input/Input';
import CSS from 'csstype';
import './Header.css';

const Header: React.FC<Props> = props => {
  const {
    headerBGColor,
    emphasisColor,
    emphasisComplimentColor,
    logoFont,
    logoColor,
    logoText,
    changeLogoText
  } = props;
  const [editLogoText, setEditLogoText] = useState<boolean>(false);

  const headerStyles: CSS.Properties = {
    backgroundColor: headerBGColor
  };
  const emphasisButtonStyle: CSS.Properties = {
    color: emphasisComplimentColor,
    backgroundColor: emphasisColor
  };
  const logoStyles: CSS.Properties = {
    color: logoColor,
    fontFamily: logoFont
  };

  const toggleEditLogoText = () => {
    setEditLogoText(!editLogoText);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editLogoText) return;
    toggleEditLogoText();
  };

  return (
    <header className="Header" style={headerStyles}>
      <div className="Header_logo_containter" onClick={handleLogoClick}>
        {!editLogoText ? (
          <h1 className="Header_logo_text" style={logoStyles}>
            {logoText}
          </h1>
        ) : (
          <Input
            toChange="Logo"
            parentStateCallback={toggleEditLogoText}
            defaultValue={logoText}
            className="Header_logo_text"
          />
        )}
      </div>
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
