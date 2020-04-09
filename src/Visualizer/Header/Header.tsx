import React, { useState } from 'react';
import { Props, connector } from '../../reduxPropTypes';
import { Link } from 'react-router-dom';
import CSS from 'csstype';
import './Header.css';

const Header: React.FC<Props> = props => {
  const { headerBGColor, emphasisColor, emphasisComplimentColor, logoText, changeLogoText } = props;
  const [editLogoText, setEditLogoText] = useState<boolean>(false);

  const headerStyles: CSS.Properties = {
    backgroundColor: headerBGColor
  };
  const emphasisButtonStyle: CSS.Properties = {
    color: emphasisComplimentColor,
    backgroundColor: emphasisColor
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editLogoText) return;
    toggleEditLogoText();
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) handleLogoInputSubmit(e);
  };

  const handleLogoInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateLogoText(e.currentTarget.value);
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    updateLogoText(e.currentTarget.value);
  };

  const toggleEditLogoText = () => {
    setEditLogoText(!editLogoText);
  };

  const updateLogoText = (newStr: string) => {
    if (newStr === '') newStr = '\u00a0';
    changeLogoText(newStr);
    toggleEditLogoText();
  };

  const renderInputElement = () => {
    return (
      <>
        <input
          className="Header_input"
          name="logoInputText"
          type="text"
          defaultValue={logoText}
          onKeyPress={handleEnter}
          autoFocus
          onBlur={handleFocusOut}
        />
      </>
    );
  };

  return (
    <header className="Header" style={headerStyles}>
      <div className="Header_logo_containter" onClick={handleLogoClick}>
        {!editLogoText ? <h1 className="Header_logo_text">{logoText}</h1> : renderInputElement()}
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
