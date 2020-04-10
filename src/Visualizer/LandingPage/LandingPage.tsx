import React, { useState } from 'react';
import { Props, connector } from '../../reduxPropTypes';
import Input from '../Input/Input';
import CSS from 'csstype';
import './LandingPage.css';

const LandingPage: React.FC<Props> = props => {
  const { bgColor, hxColor, textColor, heroText, bodyText } = props;
  const [editHeroText, setEditHeroText] = useState(false);
  const [editBodyText, setEditBodyText] = useState(false);

  const mainStyle: CSS.Properties = {
    backgroundColor: bgColor
  };
  const hxStyle: CSS.Properties = {
    color: hxColor
  };
  const textStyle: CSS.Properties = {
    color: textColor
  };

  const toggleEditHeroText = () => {
    setEditHeroText(!editHeroText);
  };

  const handleHeroTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editHeroText) return;
    toggleEditHeroText();
  };

  const toggleEditBodyText = () => {
    setEditBodyText(!editBodyText);
  };

  const handleBodyTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (editBodyText) return;
    toggleEditBodyText();
  };
  return (
    <main className="LandingPage" style={mainStyle}>
      <div className="LandingPage_container">
        <div onClick={handleHeroTextClick}>
          {!editHeroText ? (
            <h1 className="LandingPage_hero_text" style={hxStyle}>
              {heroText}
            </h1>
          ) : (
            <Input
              parentStateCallback={toggleEditHeroText}
              toChange="Hero"
              defaultValue={heroText}
              style={hxStyle}
              className="LandingPage_hero_text"
            />
          )}
        </div>
        <div onClick={handleBodyTextClick}>
          <p style={textStyle}>{bodyText}</p>
        </div>
      </div>
    </main>
  );
};

export default connector(LandingPage);
