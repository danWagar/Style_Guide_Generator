import React from 'react';
import { Props, connector } from '../../reduxPropTypes';
import CSS from 'csstype';
import './LandingPage.css';

const LandingPage: React.FC<Props> = props => {
  const { bgColor, hxColor, textColor } = props;
  const mainStyle: CSS.Properties = {
    backgroundColor: bgColor
  };
  const hxStyle: CSS.Properties = {
    color: hxColor
  };
  const textStyle: CSS.Properties = {
    color: textColor
  };
  return (
    <main style={mainStyle}>
      <h1 className="LandingPage_hero_text" style={hxStyle}>
        Hero Text, Being Heroic
      </h1>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
    </main>
  );
};

export default connector(LandingPage);
