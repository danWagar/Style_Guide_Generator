import React, { useState, useRef, useEffect } from 'react';
import { Props, connector } from '../../reduxInterface';
import Input from '../Input/Input';
import Styles from '../../styles';
import { colorResultToRgbaString } from '../../colorConvert';
import CSS from 'csstype';
import './LandingPage.css';

const LandingPage: React.FC<Props> = props => {
  const {
    bgColor,
    hxColor,
    textColor,
    heroText,
    bodyText,
    hxFont,
    hxFontSize,
    textFont,
    textFontSize
  } = props;
  const [editHeroText, setEditHeroText] = useState(false);
  const [editBodyText, setEditBodyText] = useState(false);
  const [bodyTextHeight, setBodyTextHeight] = useState<number | undefined>(0);
  const ref = useRef<HTMLParagraphElement | null>(null) as React.MutableRefObject<HTMLParagraphElement>;

  const style = new Styles(props);

  useEffect(() => {
    if (!ref.current) return;
    console.log(ref.current.clientHeight);
    setBodyTextHeight(ref.current.clientHeight + 8);
  });

  const mainStyle: CSS.Properties = {
    backgroundColor: colorResultToRgbaString(bgColor)
  };
  const hxStyle: CSS.Properties = {
    color: colorResultToRgbaString(hxColor),
    ...style.hxFontStyle
  };
  const textStyle: CSS.Properties = {
    color: colorResultToRgbaString(textColor),
    ...style.textFontStyle
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
        <div className="LandingPage_body_text_container" onClick={handleBodyTextClick}>
          {!editBodyText ? (
            <p ref={ref} style={textStyle}>
              {bodyText}
            </p>
          ) : (
            <Input
              parentStateCallback={toggleEditBodyText}
              toChange="Body"
              defaultValue={bodyText}
              style={textStyle}
              className="LandingPage_body_text_container"
              textField={true}
              height={bodyTextHeight}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default connector(LandingPage);
