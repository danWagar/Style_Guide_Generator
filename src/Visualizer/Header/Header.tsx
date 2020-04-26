import React, { useState } from 'react';
import { Props, connector } from '../../reduxInterface';
import Input from '../Input/Input';
import { useStyles } from '../../useStyles';
import './Header.css';

const Header: React.FC<Props> = props => {
  const { selected, logoText, changeLogoText } = props;
  const [editLogoText, setEditLogoText] = useState<boolean>(false);

  const styles = useStyles();

  const toggleEditLogoText = () => {
    setEditLogoText(!editLogoText);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editLogoText) return;
    toggleEditLogoText();
  };

  return (
    <header className="Header" style={styles.headerStyles}>
      <div className="Header_logo_containter" onClick={handleLogoClick}>
        {!editLogoText ? (
          <h1
            className="Header_logo_text"
            style={{ ...styles.logoStyles, ...(selected === 'Logo' && { ...styles.selectedOutline }) }}
          >
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
        <button className="btn" style={styles.emphasisButtonStyle}>
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default connector(Header);
